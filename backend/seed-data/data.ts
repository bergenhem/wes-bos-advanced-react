function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

// This new data model conforms with Keystone v6's expected format while the previous
//   data model was designed for Keystone v5. Image metadata fields will be filled out by cloudinary
//   after we upload the images from Wes' public Cloudinary URLs.
//   Note: "photo" field is now "image".
export const products = [
  {
    name: 'Yeti Hondo',
    description: 'soo nice',
    status: 'AVAILABLE',
    price: 3423,
    image: {
      id: '5dfbed262849d7961377c2c0',
      url:
        'http://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg',
      secure_url:
        'https://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg',
    },
  },
  {
    name: 'Airmax 270',
    description: 'Great shoes!',
    status: 'AVAILABLE',
    price: 5234,
    image: {
      id: '5e2a13f0689b2835ae71d1a5',
      url:
        'http://res.cloudinary.com/wesbos/image/upload/v1579815920/sick-fits-keystone/5e2a13f0689b2835ae71d1a5.jpg',
      secure_url:
        'https://res.cloudinary.com/wesbos/image/upload/v1579815920/sick-fits-keystone/5e2a13f0689b2835ae71d1a5.jpg',
    },
  },
  {
    name: 'KITH Hoodie',
    description: 'Love this hoodie',
    status: 'AVAILABLE',
    price: 23562,
    image: {
      id: '5e2a13ff689b2835ae71d1a7',
      url:
        'http://res.cloudinary.com/wesbos/image/upload/v1579815935/sick-fits-keystone/5e2a13ff689b2835ae71d1a7.jpg',
      secure_url:
        'https://res.cloudinary.com/wesbos/image/upload/v1579815935/sick-fits-keystone/5e2a13ff689b2835ae71d1a7.jpg',
    },
  },
  {
    name: 'Fanorak',
    description: 'Super hip. Comes in a number of colours',
    status: 'AVAILABLE',
    price: 252342,
    image: {
      id: '5e2a1413689b2835ae71d1a9',
      url:
        'http://res.cloudinary.com/wesbos/image/upload/v1579815957/sick-fits-keystone/5e2a1413689b2835ae71d1a9.png',
      secure_url:
        'https://res.cloudinary.com/wesbos/image/upload/v1579815957/sick-fits-keystone/5e2a1413689b2835ae71d1a9.png',
    },
  },
  {
    name: 'Nike Vapormax',
    description: 'Kind of squeaky on some floors',
    status: 'AVAILABLE',
    price: 83456,
    image: {
      id: '5e2a142c689b2835ae71d1ab',
      url:
        'http://res.cloudinary.com/wesbos/image/upload/v1579815980/sick-fits-keystone/5e2a142c689b2835ae71d1ab.jpg',
      secure_url:
        'https://res.cloudinary.com/wesbos/image/upload/v1579815980/sick-fits-keystone/5e2a142c689b2835ae71d1ab.jpg',
    },
  },
  {
    name: 'Yeti Cooler',
    description: 'Who spends this much on a cooler?!',
    status: 'AVAILABLE',
    price: 75654,
    image: {
      id: '5e2a143f689b2835ae71d1ad',
      url:
        'http://res.cloudinary.com/wesbos/image/upload/v1579815999/sick-fits-keystone/5e2a143f689b2835ae71d1ad.jpg',
      secure_url:
        'https://res.cloudinary.com/wesbos/image/upload/v1579815999/sick-fits-keystone/5e2a143f689b2835ae71d1ad.jpg',
    },
  },
  {
    name: 'Naked and Famous Denim',
    description: 'Japanese Denim, made in Canada',
    status: 'AVAILABLE',
    price: 10924,
    image: {
      id: '5e2a145d689b2835ae71d1af',
      url:
        'http://res.cloudinary.com/wesbos/image/upload/v1579816030/sick-fits-keystone/5e2a145d689b2835ae71d1af.jpg',
      secure_url:
        'https://res.cloudinary.com/wesbos/image/upload/v1579816030/sick-fits-keystone/5e2a145d689b2835ae71d1af.jpg',
    },
  },
  {
    name: 'Rimowa Luggage',
    description: 'S T E A L T H',
    status: 'AVAILABLE',
    price: 47734,
    image: {
      id: '5e2a147b689b2835ae71d1b1',
      url:
        'http://res.cloudinary.com/wesbos/image/upload/v1579816060/sick-fits-keystone/5e2a147b689b2835ae71d1b1.png',
      secure_url:
        'https://res.cloudinary.com/wesbos/image/upload/v1579816060/sick-fits-keystone/5e2a147b689b2835ae71d1b1.png',
    },
  },
  {
    name: 'Black Hole ',
    description: 'Outdoorsy ',
    status: 'AVAILABLE',
    price: 4534,
    image: {
      id: '5e2a149b689b2835ae71d1b3',
      url:
        'http://res.cloudinary.com/wesbos/image/upload/v1579816093/sick-fits-keystone/5e2a149b689b2835ae71d1b3.jpg',
      secure_url:
        'https://res.cloudinary.com/wesbos/image/upload/v1579816093/sick-fits-keystone/5e2a149b689b2835ae71d1b3.jpg',
    },
  },
  {
    name: 'Nudie Belt',
    description: 'Sick design',
    status: 'AVAILABLE',
    price: 5234,
    image: {
      id: '5e2a14b1689b2835ae71d1b5',
      url:
        'http://res.cloudinary.com/wesbos/image/upload/v1579816114/sick-fits-keystone/5e2a14b1689b2835ae71d1b5.jpg',
      secure_url:
        'https://res.cloudinary.com/wesbos/image/upload/v1579816114/sick-fits-keystone/5e2a14b1689b2835ae71d1b5.jpg',
    },
  },
  {
    name: 'Goose',
    description: 'Keep warm.',
    status: 'AVAILABLE',
    price: 74544,
    image: {
      id: '5e2a14bf689b2835ae71d1b7',
      url:
        'http://res.cloudinary.com/wesbos/image/upload/v1579816128/sick-fits-keystone/5e2a14bf689b2835ae71d1b7.jpg',
      secure_url:
        'https://res.cloudinary.com/wesbos/image/upload/v1579816128/sick-fits-keystone/5e2a14bf689b2835ae71d1b7.jpg',
    },
  },
  {
    name: 'Ultraboost',
    description: 'blacked out',
    status: 'AVAILABLE',
    price: 6344,
    image: {
      id: '5e2a14cc689b2835ae71d1b9',
      url:
        'http://res.cloudinary.com/wesbos/image/upload/v1579816141/sick-fits-keystone/5e2a14cc689b2835ae71d1b9.jpg',
      secure_url:
        'https://res.cloudinary.com/wesbos/image/upload/v1579816141/sick-fits-keystone/5e2a14cc689b2835ae71d1b9.jpg',
    },
  },
]
