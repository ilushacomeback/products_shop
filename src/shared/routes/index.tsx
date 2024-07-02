interface StaticRoutes {
  home: string;
  signup: string;
  login: string;
  account: string;
}

interface ApiRoutes {
  [key: string]: () => string
}

export const staticRoutes: StaticRoutes = {
  home: '/',
  signup: '/signup',
  login: '/login',
  account: '/account',
};

const base = 'https://b0d841e2ac3f6529.mokky.dev'

export const apiRoutes: ApiRoutes = {
    baseUrl: () => base,
    login: () => [base, 'auth'].join('/'),
    signup: () => [base, 'register'].join('/'),
    products: () => [base, 'products'].join('/'),
    categories: () => [base, 'categories'].join('/'),
    users: () => [base, 'users'].join('/'),
}
