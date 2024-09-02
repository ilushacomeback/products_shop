import {
  selectors,
  useAddProductsInDB,
  useAppSelector,
  useAppDispatch,
} from '@/shared';
import { useAddGuestProduct } from './useAddGuestProduct';
import { useAddUserProduct } from './useAddUserProduct';

export const useAddProduct = (): [(id: number, side?: string) => void, boolean] => {
  const dispatch = useAppDispatch();
  const [addProduct, { isLoading }] = useAddProductsInDB();
  const isAuth = !!useAppSelector(selectors.authSelectors.selectToken);
  const products = useAppSelector(selectors.basketSelectors.selectProducts);

  const resultFunctionForAddProduct = !isAuth
    ? (id: number, side?: string) => useAddGuestProduct(dispatch, id, side)
    : (id: number, side?: string) =>
        useAddUserProduct(addProduct, products, String(id), side);

  return [resultFunctionForAddProduct, isLoading];
};
