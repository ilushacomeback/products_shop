import { useEffect } from 'react';
import { Product, useGetProductsQuery } from '../../../shared';
import { CardProduct } from '../../../entities';

export const Products: React.FC = () => {
  const { data }: { data?: Product[] } = useGetProductsQuery(undefined);

  useEffect(() => {}, []);

  return !data ? (
    <div>loading...</div>
  ) : (
    <ul>
      {data.map((product) => (
        <li>{<CardProduct product={product} />}</li>
      ))}
    </ul>
  );
};
