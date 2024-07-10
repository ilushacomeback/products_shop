import { actions, getCookie } from '@/shared';
import { Dispatch } from '@reduxjs/toolkit';

export const useAddGuestProduct = (
  dispatch: Dispatch,
  id: number,
  side?: string
) => {
  let newBasket;
  const basket = getCookie('basket');
  const minusOrPlus = side === 'minus' ? -1 : 1;

  if (basket) {
    const currentBasket = JSON.parse(basket);
    newBasket = {
      ...currentBasket,
      [id]: currentBasket[id] ? currentBasket[id] + minusOrPlus : 1,
    };
  } else {
    newBasket = { [id]: 1 };
  }
  
  if (!newBasket[id]) {
    delete newBasket[id];
  }

  dispatch(actions.addProductsInBasket(newBasket));
  const normalizeData = JSON.stringify(newBasket);
  document.cookie = `basket=${encodeURIComponent(normalizeData)}`;
};
