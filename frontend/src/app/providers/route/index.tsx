import { PropsWithChildren } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Basket, Products, Login, Signup } from '@/pages';
import { staticRoutes as routes } from '@/shared';

export const RouterProvider = (props: PropsWithChildren) => {
  return (
    <BrowserRouter>
      {props.children}
      <Routes>
        <Route path={routes.home} element={<Products />} />
        <Route path={routes.basket} element={<Basket />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signup} element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
