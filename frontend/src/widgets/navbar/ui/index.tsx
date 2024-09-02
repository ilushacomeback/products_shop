import { useContext } from 'react';
import {
  NavbarContainer,
  Logo,
  Menu,
  NavLink,
  ResponsiveMenuItem,
  MenuItem,
} from '../styled-component/index';
import { useAppSelector, selectors, useAppDispatch, actions, staticRoutes } from '@/shared';
import { AuthContext } from '@/shared';
import { SearchProducts } from '@/features';

const ButtonsForGuest = () => {
  return (
    <>
      <MenuItem>
        <NavLink to={staticRoutes.login}>Login</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to={staticRoutes.signup}>Signup</NavLink>
      </MenuItem>
    </>
  );
};

const ButtonsForUser = () => {
  const { logOut } = useContext(AuthContext);
  const dispatch = useAppDispatch()

  const handleExit = () => {
    dispatch(actions.addProductsInBasket({}))
    logOut()
  }

  return (
    <>
      <MenuItem>
        <NavLink to={staticRoutes.login} onClick={handleExit}>
          Exit
        </NavLink>
      </MenuItem>
    </>
  );
};

const NavbarRight = ({ token }: { token: boolean }) => {
  return token ? <ButtonsForUser /> : <ButtonsForGuest />;
};

export const Navbar = () => {
  const token: boolean = !!useAppSelector(selectors.authSelectors.selectToken);

  return (
    <header>
      <NavbarContainer className="nav-container">
        <Logo>MyLogo</Logo>
        <SearchProducts />
        <Menu>
          <ResponsiveMenuItem>
            <NavLink to={staticRoutes.home}>Home</NavLink>
          </ResponsiveMenuItem>
          <MenuItem>
            <NavLink to={staticRoutes.basket}>Basket</NavLink>
          </MenuItem>
          <NavbarRight token={token} />
        </Menu>
      </NavbarContainer>
    </header>
  );
};
