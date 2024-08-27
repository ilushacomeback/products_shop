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
} from '@/shared';
// import { useBasket } from '@/entities/basket/model/useBasket';

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 10px 20px;

  @media(max-width: 407px) {
    justify-content: center;
  }
`;

export const Products = () => {
  const dispatch = useAppDispatch();
  // const basket = useBasket();
  const page = useAppSelector(selectors.productsSelectors.selectCurrentPage);
  const category = useAppSelector(
    selectors.productsSelectors.selectCurrentCategory
  );
  useGetProductsPagination({ page, category });
  const products = useAppSelector(selectors.productsSelectors.selectProducts);

  useEffect(() => {
    // if (basket) {
    //   dispatch(actions.addProductsInBasket(basket));
    // }
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
