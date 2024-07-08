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
    const token: string | null = useAppSelector(
      selectors.authSelectors.selectToken
    );
  
    if (token) {
      const { data, isLoading }: { data?: UserData; isLoading: boolean } =
        useGetUserDataQuery(undefined);
    } else {
      const currentBasket: Record<string, string> = {};
      const cookie = getCookie('basket');
      if (!cookie) return null;
      const basket = JSON.parse(decodeURIComponent(cookie));
      for (const key in basket) {
        currentBasket[key] = basket[key];
      }
      return currentBasket;
    }
  };
  