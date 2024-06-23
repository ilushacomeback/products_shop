interface StaticRoutes {
  home: string;
  signup: string;
  login: string;
  account: string;
}

interface ApiRoutes {
    baseUrl: string,
    login: string,
    signup: string,
    products: string
}

export const staticRoutes: StaticRoutes = {
  home: '/',
  signup: '/signup',
  login: '/login',
  account: '/account',
};

export const apiRoutes: ApiRoutes = {
    baseUrl: 'https://b0d841e2ac3f6529.mokky.dev',
    login: '/auth',
    signup: '/register',
    products: '/products',
}
