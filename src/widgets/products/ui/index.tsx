import { useEffect } from 'react';
import { Product, useGetProductsQuery } from '../../../shared';
import { CardProduct } from '../../../entities';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  padding: 10px 20px;
`;

export const Products: React.FC = () => {
  const { data }: { data?: Product[] } = useGetProductsQuery(undefined);

  useEffect(() => {}, []);

  return !data ? (
    <div>loading...</div>
  ) : (
    <Ul>
      {data.map((product) => <CardProduct product={product} key={product.id} />)}
    </Ul>
  );
};
