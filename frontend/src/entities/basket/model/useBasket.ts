import { getBasketOfCookie } from './getBasketOfCookie';
import { syncBaskets } from './syncBaskets';
import {
  useAppSelector,
  useGetUserDataQuery,
  selectors,
  useAddProductInBasketMutation,
} from '@/shared';

export const useBasket = () => {
  const token: string | null = useAppSelector(
    selectors.authSelectors.selectToken
  );
  const [addProducts] = useAddProductInBasketMutation();
  const basketOfCookie = getBasketOfCookie();
  const { data, isLoading } = useGetUserDataQuery(undefined);

  if (token && basketOfCookie && !isLoading) {
    const basket = data.basket;
    const result = syncBaskets(basket, basketOfCookie);
    addProducts(result);
    document.cookie = 'basket=;max-age=0';
  } else {
    return getBasketOfCookie();
  }
};
