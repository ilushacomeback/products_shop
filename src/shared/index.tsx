export { staticRoutes, apiRoutes } from './routes/index';
export { useLoginMutation, useSignupMutation } from './api/auth';
export { useGetProductQuery, useGetProductsQuery } from './api/products'
export { store, actions, selectors } from './model/store/index'
export { useAppDispatch, useAppSelector, useAppStore } from './hooks/index'
export { useLazy } from './hooks/useLazy'
export type { ResponseData, AuthState, Product } from './interfaces/index'
export { AuthProvider } from './contexts/auth/AuthProvider'
export { AuthContext } from './contexts/auth/AuthContext'
export * as UI from './ui-kit/index'
