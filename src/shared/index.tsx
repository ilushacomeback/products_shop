export { staticRoutes, apiRoutes } from './routes/index';
export { authApi, useLoginMutation, useSignupMutation } from './api/auth';
export { store, actions, selectors } from './model/store/index'
export { useAppDispatch, useAppSelector, useAppStore } from './hooks/index'
export type { ResponseData, AuthState } from './interfaces/index'
export { AuthProvider } from './context/auth/AuthProvider'
export { AuthContext } from './context/auth/AuthContext'
