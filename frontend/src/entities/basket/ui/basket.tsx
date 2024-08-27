import {
  useGetProductsForBasket,
  useAddProductsInDB,
  Product,
  selectors,
  useAppSelector,
  useAppDispatch,
  actions,
  UI,
  useGetBasketOfDB,
} from '@/shared';
// import { useBasket } from '../model/useBasket';
import React, { useEffect } from 'react';

interface PropsBasket {
  ButtonsOfQuantity: React.FC<{ quantity: number; id: number }>;
}

interface Products {
  data: Product[];
}

export const Basket = ({ ButtonsOfQuantity }: PropsBasket) => {
  const { CustomSubmit } = UI;
  const dispatch = useAppDispatch();

  const currentBasket = useAppSelector(
    selectors.basketSelectors.selectProducts
  );

  useEffect(() => {
    // const useFetchData = () => {
  
    //   if (isLoading) {
    //     console.log('Данные грузятся из БД');
    //   } else if (!isLoading && data) {
    //     console.log('данные из бд', data);
    //   }
    // }

    // useFetchData()
  }, []);

  console.log('cur', currentBasket);

  if (!currentBasket) {
    return <div>Basket empty</div>;
  }

  // const [addProductsInDB] = useAddProductsInDB();
  // const basket = useBasket();

  const productsIds: string[] = Object.keys(currentBasket);
  console.log('ids',productsIds);

  const {
    data: productsUser,
    isLoading,
  }: { data?: Products; isLoading: boolean } =
    useGetProductsForBasket(productsIds);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return productsIds.length === 0 && !isLoading ? (
    <div>Basket empty</div>
  ) : (
    <main style={{ margin: '10px' }}>
      <ul style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {productsUser?.data
          .filter((product) => currentBasket[product.id] > 0)
          .map((product: Product) => (
            <li key={product.id} style={{ width: '200px' }}>
              <img src={product.image} alt={product.name} />
              <h1 style={{ textWrap: 'nowrap' }}>name: {product.name}</h1>
              <h2>number: {currentBasket[product.id]}</h2>
              {currentBasket[product.id] !== 0 && (
                <ButtonsOfQuantity
                  quantity={currentBasket[product.id]}
                  id={product.id}
                />
              )}
            </li>
          ))}
      </ul>
      <span>
        Result:{' '}
        {`$${
          productsUser?.data.reduce(
            (acc, product) =>
              (acc += Number(product.price) * currentBasket[product.id]),
            0
          ) || ''
        }`}
      </span>
      <CustomSubmit>Pay</CustomSubmit>
    </main>
  );
};
