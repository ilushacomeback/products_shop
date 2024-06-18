import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.span`
  font-size: 1.5rem;
  color: white;
`;

export const Menu = styled.ul`
  list-style-type: none;
  display: flex;
`;

export const MenuItem = styled.li`
  margin-right: 20px;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: lightgray;
  }
`;

const mediaQuery768px = '@media (max-width: 768px)';

export const ResponsiveMenuItem = styled(MenuItem)`
  ${mediaQuery768px} {
    display: none;
  }
`;
