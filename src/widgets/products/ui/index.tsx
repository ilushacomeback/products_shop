import styled from 'styled-components';
import { useEffect } from 'react';
import {
  actions,
  selectors,
  useAppDispatch,
  useAppSelector,
  useGetProductsQuery,
} from '@/shared';
import { CardProduct } from '@/entities';
import { AddProductButton } from '@/features';


const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 10px 20px;
`;

export const Products = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectors.productsSelectors.selectCurrentPage);
  const category = useAppSelector(
    selectors.productsSelectors.selectCurrentCategory
  );
  const { isLoading } = useGetProductsQuery({ page, category });
  const products = useAppSelector(selectors.productsSelectors.selectProducts);

  useEffect(() => {
    return () => {
      dispatch(actions.resetProducts());
    };
  }, []);

  return !products ? (
    <div>loading...</div>
  ) : (
    <Ul>
      {products.map((product, i) => (
        <CardProduct
          product={product}
          key={product.id}
          isLast={i === products.length - 1}
          AddProductButton={AddProductButton}
        />
      ))}
    </Ul>
  );
};
