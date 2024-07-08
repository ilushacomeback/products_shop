export { staticRoutes, apiRoutes } from './routes/index';
export { useLoginMutation, useSignupMutation } from './api/auth';
export { useGetCategoriesQuery } from './api/categories';
export { store, actions, selectors } from './model/store/index';
export { useLazy } from './hooks/useLazy';
export { getCookie } from './hooks/getCookie';
export type { ResponseData, AuthState, Product } from './interfaces/index';
export { AuthProvider } from './contexts/auth/AuthProvider';
export { AuthContext } from './contexts/auth/AuthContext';
export * as UI from './ui-kit/index';
export { useGetProductQuery, useGetProductsQuery } from './api/products';
export {
  useGetBasketQuery,
  useGetUserDataQuery,
  useAddProductInBasketMutation,
} from './api/basket';
export {
  useDeleteUserMutation,
  useUpdateInfoUserMutation,
  useAddInBasketMutation,
} from './api/user';
export {
  useAppDispatch,
  useAppSelector,
  useAppStore,
} from './hooks/hooksStore';
