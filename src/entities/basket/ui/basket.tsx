import {
  getCookie,
  selectors,
  useAppSelector,
  useGetBasketQuery,
  Product,
  useGetUserDataQuery,
} from '@/shared';

interface UserData {
  basket: Record<string, string>;
}

export const Basket = () => {
  const currentBasket: Record<string, string> = {};

  const token: string | null = useAppSelector(
    selectors.authSelectors.selectToken
  );
  const id: number | null = useAppSelector(selectors.authSelectors.selectId);

  if (token) {
    const { data, isLoading }: { data?: UserData; isLoading: boolean } =
      useGetUserDataQuery(id);

    if (data?.basket && !isLoading) {
      for (const key in data.basket) {
        currentBasket[key] = data.basket[key];
      }
    }
  } else {
    const cookie = getCookie('basket');
    if (!cookie) return null;
    const basket = JSON.parse(decodeURIComponent(cookie));
    for (const key in basket) {
      currentBasket[key] = basket[key];
    }
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
