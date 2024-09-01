import { UI, selectors, staticRoutes, useAppSelector } from '@/shared';
import { useAddProduct } from '../model/addProduct';
import { useNavigate } from 'react-router-dom';

enum State {
  InBasket = 'In Basket',
  OutBasket = 'Add Basket',
}

export const AddProductButton = ({ id }: { id: number }) => {
  const products = useAppSelector(selectors.basketSelectors.selectProducts);
  const navigate = useNavigate();
  const { CustomSubmit } = UI;
  const [addProduct, isLoading] = useAddProduct();

  if (isLoading) {
    return <div>loading...</div>;
  }

  const textBtn = products && products[id] ? State.InBasket : State.OutBasket;

  if (textBtn === State.InBasket) {
    return (
      <CustomSubmit onClick={() => navigate(staticRoutes.basket)} color="red">
        {textBtn}
      </CustomSubmit>
    );
  }
  return <CustomSubmit onClick={() => addProduct(id)}>{textBtn}</CustomSubmit>;
};
