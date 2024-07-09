import { getCookie } from "@/shared";

export const getBasketOfCookie = () => {
  const currentBasket: Record<string, string> = {};
  const cookie = getCookie('basket');
  if (!cookie) return null;
  const basket = JSON.parse(decodeURIComponent(cookie));
  for (const key in basket) {
    currentBasket[key] = basket[key];
  }
  return currentBasket;
};
