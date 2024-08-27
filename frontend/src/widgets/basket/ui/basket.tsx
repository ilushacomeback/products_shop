import { Basket as BasketEntities, BasketEmpty } from '@/entities';
import { ButtonsOfQuantity } from '@/features';
import { useAppDispatch, useGetBasketOfDB, actions } from '@/shared';

export const Basket = () => {
  const { data, isLoading } = useGetBasketOfDB(undefined);
  if (isLoading) return <div>данные грузятся</div>
  return <BasketEntities ButtonsOfQuantity={ButtonsOfQuantity} />;
};
