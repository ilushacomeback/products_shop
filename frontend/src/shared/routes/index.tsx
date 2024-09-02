interface StaticRoutes {
  home: string;
  signup: string;
  login: string;
  basket: string;
}

type Path = () => string

interface ApiRoutes {
  baseUrl: Path,
  login: Path,
  signup: Path,
  products: Path,
  search: Path,
  basket: Path,
  categories: Path,
  users: Path,
}

export const staticRoutes: StaticRoutes = {
  home: '/',
  signup: '/signup',
  login: '/login',
  basket: '/basket',
};

const base = 'http://localhost:4000/api';

export const apiRoutes: ApiRoutes = {
  baseUrl: () => base,
  login: () => [base, 'login'].join('/'),
  signup: () => [base, 'register'].join('/'),
  products: () => [base, 'products'].join('/'),
  search: () => [base, 'search'].join('/'),
  basket: () => [base, 'basket'].join('/'),
  categories: () => [base, 'categories'].join('/'),
  users: () => [base, 'users'].join('/'),
};
