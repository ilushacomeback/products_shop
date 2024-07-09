import { UI } from '@/shared';
import { useAddProduct } from '../model/addProduct';


export const AddProductButton = ({ id }: { id: number }) => {
  const { CustomSubmit } = UI;
  const addProduct = useAddProduct()
  return <CustomSubmit onClick={() => addProduct(id)}>Add</CustomSubmit>;
};
