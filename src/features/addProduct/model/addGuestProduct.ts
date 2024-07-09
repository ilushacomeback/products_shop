import { getCookie } from '@/shared';

export const addGuestProduct = (id: number) => {
  let newBasket;
  const basket = getCookie('basket');

  if (basket) {
    const currentBasket = JSON.parse(basket);
    newBasket = {
      ...currentBasket,
      [id]: currentBasket[id] ? currentBasket[id] + 1 : 1,
    };
  } else {
    newBasket = { [id]: 1 };
  }
  const normalizeData = JSON.stringify(newBasket);
  document.cookie = `basket=${encodeURIComponent(normalizeData)}`;
};
