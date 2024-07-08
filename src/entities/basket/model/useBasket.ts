import {
  useAppSelector,
  useGetUserDataQuery,
  getCookie,
  selectors,
} from '@/shared';

interface UserData {
  basket: Record<string, string>;
}

export const useBasket = () => {
  const currentBasket: Record<string, string> = {};

  const token: string | null = useAppSelector(
    selectors.authSelectors.selectToken
  );

  if (token) {
    const { data, isLoading }: { data?: UserData; isLoading: boolean } =
      useGetUserDataQuery(undefined);

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

  return currentBasket
};
