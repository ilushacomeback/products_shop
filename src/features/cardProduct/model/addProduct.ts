import {
  selectors,
  useAddProductInBasketMutation,
  useAppSelector,
} from '@/shared';
import { addGuestProduct } from './addGuestProduct';
import { useAddUserProduct } from './useAddUserProduct';

export const useAddProduct = () => {
  const [addUserProduct] = useAddProductInBasketMutation();
  const isAuth = !!useAppSelector(selectors.authSelectors.selectToken);
  const products = useAppSelector(selectors.basketSelectors.selectProducts);

  return !isAuth
    ? (id: number, side?: string) => addGuestProduct(id, side)
    : (id: number, side?: string) => useAddUserProduct(addUserProduct, products, String(id), side);
};