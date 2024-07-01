import styled from 'styled-components';
import { selectors, useAppSelector, useGetProductsQuery } from '@/shared';
import { CardProduct } from '@/entities';

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 10px 20px;
`;

export const Products = () => {
  const page = useAppSelector(selectors.productsSelectors.selectCurrentPage);
  const category = useAppSelector(
    selectors.productsSelectors.selectCurrentCategory
  );
  useGetProductsQuery({ page, category });
  const products = useAppSelector(selectors.productsSelectors.selectProducts);
  return !products ? (
    <div>loading...</div>
  ) : (
    <Ul>
      {products.map((product, i) => (
        <CardProduct
          product={product}
          key={product.id}
          isLast={i === products.length - 1}
        />
      ))}
    </Ul>
  );
};
