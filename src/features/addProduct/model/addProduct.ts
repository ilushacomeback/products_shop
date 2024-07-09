import {
  selectors,
  useAddProductInBasketMutation,
  useAppSelector,
} from '@/shared';
import { addGuestProduct } from '../model/addGuestProduct';
import { useAddUserProduct } from '../model/useAddUserProduct';

export const useAddProduct = () => {
  const [addUserProduct] = useAddProductInBasketMutation();
  const isAuth = !!useAppSelector(selectors.authSelectors.selectToken);
  const products = useAppSelector(selectors.basketSelectors.selectProducts);

  return !isAuth
    ? (id: number) => addGuestProduct(id)
    : (id: number) => useAddUserProduct(addUserProduct, products, String(id));
};