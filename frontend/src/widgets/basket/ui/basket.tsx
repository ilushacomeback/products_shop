import { Basket as BasketEntities } from '@/entities';
import { ButtonsOfQuantity } from '@/features';
import { useGetBasketOfDB } from '@/shared';

export const Basket = () => {
  const { data, isLoading, status } = useGetBasketOfDB(undefined);
  if (isLoading) return <div>данные грузятся</div>
  return <BasketEntities ButtonsOfQuantity={ButtonsOfQuantity} />;
};
