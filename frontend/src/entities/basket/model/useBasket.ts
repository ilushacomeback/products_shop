// import { getBasketOfCookie } from './getBasketOfCookie';
// import { syncBaskets } from './syncBaskets';
// import {
//   useAppSelector,
//   useGetBasketOfDB,
//   selectors,
//   useAddProductsInDB,
// } from '@/shared';

// export const useBasket = () => {
//   const token: string | null = useAppSelector(selectors.authSelectors.selectToken);

//   const [addProductsInDB] = useAddProductsInDB();
//   const basketInCookie = getBasketOfCookie() || {};
//   const { data, isLoading } = useGetBasketOfDB(undefined);
//   let resultBasket = {};
//   if (token && !isLoading) {
//     const basketInBD = data as Record<string, number> || {};
//     const syncBasket = syncBaskets(basketInBD, basketInCookie);
//     resultBasket = syncBasket;
//     addProductsInDB(syncBasket);
//     document.cookie = 'basket=;max-age=0';
//   } else if (basketInCookie) {
//     resultBasket = basketInCookie;
//   }
//   console.log('result', resultBasket)
//   return resultBasket
// };
