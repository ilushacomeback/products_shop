import { UI, selectors } from '@/shared';
import { addProduct } from '../model/addProduct';
import { useSelector } from 'react-redux';

export const AddProductButton = ({ id }: { id: number }) => {
  const { CustomSubmit } = UI;
  const isAuth = !!useSelector(selectors.authSelectors.selectToken)
  return <CustomSubmit onClick={() => addProduct(id, isAuth)}>Add</CustomSubmit>;
};
