import React from 'react';
import styled from 'styled-components';
import { useAddProduct } from '../model/addProduct';

const Button = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  text-align: center;
`;

interface PropsButtonsOfQuantity {
  quantity: number;
  id: number;
}

export const ButtonsOfQuantity = (props: PropsButtonsOfQuantity) => {
  const addProduct = useAddProduct();
  return (
    <div style={{ display: 'flex', gap: '5px', alignItems: 'center', textAlign: 'center'}}>
      <Button onClick={() => addProduct(props.id, 'minus')}>-</Button>
      <span>{props.quantity}</span>
      <Button onClick={() => addProduct(props.id, 'plus')}>+</Button>
    </div>
  );
};
