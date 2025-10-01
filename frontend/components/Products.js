import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    products {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrl
        }
      }
    }
  }
`;
export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading);
  return (
    <>
      <p>Products!</p>
    </>
  );
}
