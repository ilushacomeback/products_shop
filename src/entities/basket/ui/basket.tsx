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
  
    const token = useAppSelector(selectors.authSelectors.selectToken);
    const id = useAppSelector(selectors.authSelectors.selectId);
  
    if (token) {
      const { data, isLoading }: { data?: UserData; isLoading: boolean } =
        useGetUserDataQuery(id);
  
      if (data?.basket) {
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
  
    const ids = Object.keys(currentBasket);
    const { data, isLoading }: { data?: Product[]; isLoading: boolean } =
      useGetBasketQuery(ids);
  
    return isLoading && !data ? (
      <div>loading...</div>
    ) : (
      <div>
        {data?.map((el: Product) => (
          <div key={el.id}>
            <img src={el.image} alt="" />
            <h1>name: {el.name}</h1>
            <h2>number: {currentBasket[el.id]}</h2>
          </div>
        ))}
      </div>
    );
  };
  