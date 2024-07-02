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
export { useDeleteUserMutation, useUpdateInfoUserMutation } from './api/user';
export {
  useGetProductQuery,
  useGetProductsQuery,
  useGetBasketQuery,
} from './api/products';
export {
  useAppDispatch,
  useAppSelector,
  useAppStore,
} from './hooks/hooksStore';
