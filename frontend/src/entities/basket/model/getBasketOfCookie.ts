import { getCookie } from "@/shared";

export const getBasketOfCookie = () => {
  const basket = getCookie('basket') || '{}';
  if (!basket) return null;
  return JSON.parse(decodeURIComponent(basket)) as Record<string, number>;

};
