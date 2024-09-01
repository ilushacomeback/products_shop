import { Basket as BasketEntities } from '@/entities';
import { ButtonsOfQuantity } from '@/features';
import { useGetBasketOfDB } from '@/shared';

export const Basket = () => {
  console.log('tut')
  const { data, isLoading, status } = useGetBasketOfDB(undefined);
  console.log('status', status)
  if (isLoading) return <div>данные грузятся</div>
  console.log('данные из бд в корзине', data)
  return <BasketEntities ButtonsOfQuantity={ButtonsOfQuantity} />;
};
