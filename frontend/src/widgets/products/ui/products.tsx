import styled from 'styled-components';
import { useEffect } from 'react';
import { CardProduct } from '@/entities';
import { AddProductButton } from '@/features';
import {
  actions,
  selectors,
  useAppDispatch,
  useAppSelector,
  useGetProductsPagination,
  useGetBasketOfDB,
  useAddProductsInDB,
} from '@/shared';

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 10px 20px;

  @media (max-width: 407px) {
    justify-content: center;
  }
`;

export const Products = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetBasketOfDB(undefined);
  const [addProductsInDB] = useAddProductsInDB();

  useEffect(() => {
    if (data && !isLoading) {
      addProductsInDB(data);
    }
  }, [data]);

  const page = useAppSelector(selectors.productsSelectors.selectCurrentPage);
  const category = useAppSelector(
    selectors.productsSelectors.selectCurrentCategory
  );
  const { isLoading: isLoadPagination} = useGetProductsPagination({ page, category });
  const products = useAppSelector(selectors.productsSelectors.selectProducts);

  useEffect(() => {
    return () => {
      dispatch(actions.resetProducts());
    };
  }, []);

  if (isLoadPagination) {
    return <div>loading...</div>;
  }

  return products.length === 0 ? (
    <div>Ничего не найдено</div>
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
