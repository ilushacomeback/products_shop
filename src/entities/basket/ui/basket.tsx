import {
    useGetBasketQuery,
    Product,
    selectors,
    useAppSelector,
    useAppDispatch,
    actions,
  } from '@/shared';
  import { useBasket } from '../model/useBasket';
  import { useEffect } from 'react';
  
  export const Basket = () => {
    const basket = useBasket();
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      if (basket) {
        dispatch(actions.addProductsInBasket(basket));
      }
    }, []);
  
    const currentBasket = useAppSelector(
      selectors.basketSelectors.selectProducts
    );
  
    if (!currentBasket) {
      return <div>loading...</div>;
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
      <div>Корзина пуста</div>
    ) : (
      <div>
        {productsUser?.map((el: Product) => (
          <div key={el.id}>
            <img src={el.image} alt="" />
            <h1>name: {el.name}</h1>
            <h2>number: {currentBasket[el.id]}</h2>
          </div>
        ))}
      </div>
    );
  };
  