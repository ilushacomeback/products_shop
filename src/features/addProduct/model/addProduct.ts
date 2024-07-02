import { getCookie } from '@/shared';

export const addProduct = (id: number, isAuth: boolean) => {
  if (!isAuth) {
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
    const normalizeData = encodeURIComponent(JSON.stringify(newBasket));
    document.cookie = `basket=${normalizeData}`;
  }
};
