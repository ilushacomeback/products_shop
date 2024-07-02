import {
  getCookie,
  selectors,
  useAppSelector,
  useGetBasketQuery,
  Product,
} from '@/shared';

export const Basket = () => {
  const basket = JSON.parse(getCookie('basket') as string);
  const ids = Object.keys(basket);
  const { data }: { data?: Product[] } = useGetBasketQuery(ids);
  console.log('data', data);
  return !data ? (
    <div>loading...</div>
  ) : (
    <div>
      {data.map((el: Product) => (
        <div>
          <img src={el.image} alt="" />
          <h1>name: {el.name}</h1>
          <h2>number: {basket[el.id]}</h2>
        </div>
      ))}
    </div>
  );
};
