import {
  getCookie,
  selectors,
  useAppSelector,
  useGetBasketQuery,
  Product,
} from '@/shared';

export const Basket = () => {
  console.log(getCookie('basket'));
  const cookie = getCookie('basket')
  if (!cookie) return null
  const basket = JSON.parse(decodeURIComponent(cookie));
  const ids = Object.keys(basket);
  const { data }: { data?: Product[] } = useGetBasketQuery(ids);
  console.log('data', data);
  return !data ? (
    <div>loading...</div>
  ) : (
    <div>
      {data.map((el: Product) => (
        <div key={el.id}>
          <img src={el.image} alt="" />
          <h1>name: {el.name}</h1>
          <h2>number: {basket[el.id]}</h2>
        </div>
      ))}
    </div>
  );
};
