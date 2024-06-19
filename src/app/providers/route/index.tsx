import React, { PropsWithChildren } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Account, Login, Signup } from '../../../pages';
import { staticRoutes as routes } from '../../../shared';

export const RouterProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.account} element={<Account />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signup} element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
