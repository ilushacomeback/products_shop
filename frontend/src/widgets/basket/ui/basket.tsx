import { Basket as BasketEntities } from '@/entities';
import { ButtonsOfQuantity } from '@/features';
import { useGetBasketOfDB } from '@/shared';

export const Basket = () => {
  const { data, isLoading } = useGetBasketOfDB(undefined);
  if (isLoading) return <div>данные грузятся</div>
  console.log('basketData', data)
  return <BasketEntities ButtonsOfQuantity={ButtonsOfQuantity} />;
};
