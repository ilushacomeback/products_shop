import {
  useGetBasketQuery,
  Product,
  selectors,
  useAppSelector,
  useAppDispatch,
  actions,
} from '@/shared';
import { useBasket } from '../model/useBasket';
import React, { useEffect } from 'react';

interface PropsBasket {
  ButtonsOfQuantity: React.FC<{ quantity: number; id: number }>;
}

export const Basket = ({ ButtonsOfQuantity }: PropsBasket) => {
  const dispatch = useAppDispatch();
  const basket = useBasket();
  const currentBasket = useAppSelector(
    selectors.basketSelectors.selectProducts
  );

  useEffect(() => {
    if (basket) {
      dispatch(actions.addProductsInBasket(basket));
    }
  }, []);

  if (!currentBasket) {
    return <div>Basket empty</div>;
  }

  const productsIds: string[] = Object.keys(currentBasket);

  const {
    data: productsUser,
    isLoading,
  }: { data?: Product[]; isLoading: boolean } = useGetBasketQuery(productsIds);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return productsIds.length === 0 && !isLoading ? (
    <div>Basket empty</div>
  ) : (
    <div style={{ display: 'flex', gap: '20px' }}>
      {productsUser
        ?.filter((el) => currentBasket[el.id] > 0)
        .map((el: Product) => (
          <div key={el.id} style={{ width: '200px' }}>
            <img src={el.image} alt="" />
            <h1>name: {el.name}</h1>
            <h2>number: {currentBasket[el.id]}</h2>
            {currentBasket[el.id] !== 0 && (
              <ButtonsOfQuantity quantity={currentBasket[el.id]} id={el.id} />
            )}
          </div>
        ))}
    </div>
  );
};
