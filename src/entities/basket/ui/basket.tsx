import { selectors, useAppSelector, useGetBasketQuery } from '@/shared';
import { Fragment } from 'react';

interface Data {
  id: number;
  quantity: number;
}

interface Response {
  basket: Data[];
}

export const Basket = () => {
  const id = useAppSelector(selectors.authSelectors.selectId);
  const { data }: { data?: Response } = useGetBasketQuery(id);
  console.log('data', data);
  return !data ? (
    <div>loading...</div>
  ) : (
    <div>
      {data.basket.map(({ id, quantity }) => (
        <Fragment key={id}>
          <h1>name: {id}</h1>
          <div>number: {quantity}</div>
        </Fragment>
      ))}
    </div>
  );
};
