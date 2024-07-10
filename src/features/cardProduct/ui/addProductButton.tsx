import { UI, selectors, useAppSelector } from '@/shared';
import { useAddProduct } from '../model/addProduct';

enum State {
  InBasket = 'In Basket',
  OutBasket = 'Add Basket',
}

export const AddProductButton = ({ id }: { id: number }) => {
  const products = useAppSelector(selectors.basketSelectors.selectProducts);
  const { CustomSubmit } = UI;
  const addProduct = useAddProduct();
  const textBtn = products && products[id] ? State.InBasket : State.OutBasket;
  return (
    <CustomSubmit
      onClick={() => addProduct(id)}
      disabled={textBtn === State.InBasket}
      color={textBtn === State.InBasket ? 'red' : ''}
    >
      {textBtn}
    </CustomSubmit>
  );
};
