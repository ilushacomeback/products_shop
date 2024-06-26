export { staticRoutes, apiRoutes } from './routes/index';
export { useLoginMutation, useSignupMutation } from './api/auth';
export { useGetProductQuery, useGetProductsQuery } from './api/products'
export { store, actions, selectors } from './model/store/index'
export { useAppDispatch, useAppSelector, useAppStore } from './hooks/index'
export type { ResponseData, AuthState, Product } from './interfaces/index'
export { AuthProvider } from './context/auth/AuthProvider'
export { AuthContext } from './context/auth/AuthContext'
export { ObserverProvider } from './context/observer/ObserverProvider'
export { ObserverContext } from './context/observer/context'
export * as UI from './ui-kit/index'
