import ItemStyles from "./styles/ItemStyles";
import TitleStyles from "./styles/Title";
import Link from 'next/link';
import PriceTag from './styles/PriceTag';

export default function Product({ product }) {
  return (
    <ItemStyles>
      <img src={product?.photo?.image?.publicUrl} alt={product.name} />
      <TitleStyles>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </TitleStyles>
      <PriceTag>{product.price}</PriceTag>
    </ItemStyles>
  );
}
