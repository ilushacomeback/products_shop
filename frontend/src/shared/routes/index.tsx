interface StaticRoutes {
  home: string;
  signup: string;
  login: string;
  basket: string;
}

interface ApiRoutes {
  [key: string]: () => string
}

export const staticRoutes: StaticRoutes = {
  home: '/',
  signup: '/signup',
  login: '/login',
  basket: '/basket',
};

const base = 'http://localhost:4000/api'

export const apiRoutes: ApiRoutes = {
    baseUrl: () => base,
    login: () => [base, 'login'].join('/'),
    signup: () => [base, 'register'].join('/'),
    products: () => [base, 'products'].join('/'),
    categories: () => [base, 'categories'].join('/'),
    users: () => [base, 'users'].join('/'),
}
