export { staticRoutes, apiRoutes } from './routes/index';
export { useLogin, useSignup } from './api/auth';
export { useGetCategories } from './api/categories';
export { store, actions, selectors } from '../app/model/store/index';
export { useLazy } from './hooks/useLazy';
export { getCookie } from './hooks/getCookie';
export type { ResponseData, AuthState, Product } from './interfaces/index';
export { AuthProvider } from './contexts/auth/AuthProvider';
export { AuthContext } from './contexts/auth/AuthContext';
export * as UI from './ui-kit/index';
export { useGetProduct, useGetProductsPagination } from './api/products';
export {
  useGetProductsForBasket,
  useGetBasketOfDB,
  useAddProductsInDB,
} from './api/basket';
export { useDeleteUser, useUpdateUser } from './api/user';
export { useAppDispatch, useAppSelector, useAppStore } from './hooks';
