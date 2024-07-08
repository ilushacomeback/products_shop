import { UI, selectors, useAddProductInBasketMutation, useAppSelector } from '@/shared';
import { addGuestProduct } from '../model/addGuestProduct';
import { useAddUserProduct } from '../model/useAddUserProduct';

export const AddProductButton = ({ id }: { id: number }) => {
  const { CustomSubmit } = UI;
  const [addUserProduct] = useAddProductInBasketMutation();
  const isAuth = !!useAppSelector(selectors.authSelectors.selectToken);
  const products = useAppSelector(selectors.basketSelectors.selectProducts);

  const addProduct = !isAuth
    ? () => addGuestProduct(id)
    : () => useAddUserProduct(addUserProduct, products, String(id));

  return <CustomSubmit onClick={addProduct}>Add</CustomSubmit>;
};
