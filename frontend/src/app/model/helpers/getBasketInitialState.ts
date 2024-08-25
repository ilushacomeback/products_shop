import { AuthState } from '@/shared/interfaces';
import { getAuthInitialState } from './getInitialState';
import { getCookie } from '@/shared/hooks/getCookie';
import { Dispatch } from '@reduxjs/toolkit';
import { actions } from '../store';

export const getBasketInitialState = async (dispatch: Dispatch) => {
  const user: AuthState = getAuthInitialState();

  if (user.accessToken) {
    const response = await fetch(
      `https://b0d841e2ac3f6529.mokky.dev/users/${user.id}`,
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    );
    const dataUser = await response.json();
    dispatch(actions.addProductsInBasket(dataUser.basket));
  } else {
    dispatch(actions.addProductsInBasket(getCookie('basket')));
  }
};
