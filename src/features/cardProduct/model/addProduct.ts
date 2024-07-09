import {
  selectors,
  useAddProductInBasketMutation,
  useAppSelector,
  useAppDispatch
} from '@/shared';
import { useAddGuestProduct } from './useAddGuestProduct';
import { useAddUserProduct } from './useAddUserProduct';

export const useAddProduct = () => {
  const dispatch = useAppDispatch()
  const [addUserProduct] = useAddProductInBasketMutation();
  const isAuth = !!useAppSelector(selectors.authSelectors.selectToken);
  const products = useAppSelector(selectors.basketSelectors.selectProducts);

  return !isAuth
    ? (id: number, side?: string) => useAddGuestProduct(dispatch, id, side)
    : (id: number, side?: string) => useAddUserProduct(addUserProduct, products, String(id), side);
};