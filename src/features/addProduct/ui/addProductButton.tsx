import { UI, selectors } from '@/shared';
import { addGuestProduct } from '../model/addGuestProduct';
import { useSelector } from 'react-redux';

export const AddProductButton = ({ id }: { id: number }) => {
  const { CustomSubmit } = UI;
  const isAuth = !!useSelector(selectors.authSelectors.selectToken)

  const addProduct = !isAuth ? () => addGuestProduct(id) : () => console.log('user')

  return <CustomSubmit onClick={addProduct}>Add</CustomSubmit>;
};
