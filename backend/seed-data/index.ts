import 'dotenv/config';
import { products } from './data';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_KEY!,
  api_secret: process.env.CLOUDINARY_SECRET!,
  folder: process.env.CLOUDINARY_FOLDER!
});

// We may be seeding a brand new project, or we already have images in our Cloudinary account
//   Cloudinary does not have an endpoint to check if an image already exists
//   we will first try to grab the image from Cloudinary, and if it gives a 404
//   then we upload the image as it does not exist yet
async function uploadToCloudinary(url: string, publicId: string) {

  try {
    const existingImage = await cloudinary.api.resource(publicId);

    return toKeyStoneImage(existingImage);
  }
  catch (err: any) {
    if (err.error.http_code !== 404) {
      throw err; //if we have anything other than 404, throw that error. 404 means the image does not exist
    }
    const uploadedImage = await cloudinary.uploader.upload(url, {
      public_id: publicId,
      folder: process.env.CLOUDINARY_FOLDER,
      unique_filename: false,
      overwrite: true //force an overwrite just in case
    });
    return toKeyStoneImage(uploadedImage);
  }
}

// Keystone v6 has a new schema that it expects for images.
//   we need to transform the result we get from Cloudinary to the expected Keystone object format
function toKeyStoneImage(result: any) {
  return {
    id: result.public_id,
    filename: result.display_name + '.' + result.format,
    originalFilename: result.display_name + '.' + result.format,
    mimetype: `image/${result.format}`,
    filesize: result.bytes,
    width: result.width,
    height: result.height,
    extension: result.format
  }
}

// Old insertSeedData function was written for Keystone v5, and this updated project uses v6
//
export async function insertSeedData(ks: any) {
  // When using CloudinaryImage field type we cannot use Keystone's createOne() method
  //   this is because the GraphQL field type is CloudinaryImageFieldInput which only supports `upload: Upload`
  //   which is a file stream / upload object.
  //   Instead we need to directly access the underlying Prisma client to create our image
  const database = ks.prisma;

  console.log(`🌱 Inserting Seed Data: ${products.length} Products`);
  // For each product we:
  //   1. Check if it is uploaded to Cloudinary already
  //   2. If not uploaded yet, upload the image to Cloudinary
  //   3. Transform the response from Cloudinary to the expected Keystone object format
  //   4. Directly create the ProductImage & Product objects using Prisma instead of Keystone
  for (const product of products) {
    const imageData = await uploadToCloudinary(product.image.url, product.image.id);

    console.log(`  🛍️ Adding Product: ${product.name}, with product ID ${product.image.id} and imageDataID ${imageData.id}`);
    await database.Product.create({
      data: {
        name: product.name,
        description: product.description ?? '',
        status: product.status ?? 'DRAFT',
        price: product.price ?? 0,
        photo: {
          create: {
            image: imageData.id,
            altText: product.description ?? '',
          }
        }
      }
    });
  }
  console.log(`✅ Seed Data Inserted: ${products.length} Products`);
  console.log(`👋 Please start the process with \`yarn dev\` or \`npm run dev\``);
  process.exit();
}
