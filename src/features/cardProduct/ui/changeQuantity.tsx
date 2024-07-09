import React from 'react';
import styled from 'styled-components';
import { useAddProduct } from '../model/addProduct';

const Button = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
`;

interface PropsButtonsOfQuantity {
  quantity: number;
  id: number;
}

export const ButtonsOfQuantity = (props: PropsButtonsOfQuantity) => {
  const addProduct = useAddProduct();
  return (
    <div style={{ display: 'flex' }}>
      <Button onClick={() => addProduct(props.id, 'minus')}>-</Button>
      {props.quantity}
      <Button onClick={() => addProduct(props.id, 'plus')}>+</Button>
    </div>
  );
};
