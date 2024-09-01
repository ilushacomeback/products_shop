import React from 'react';
import styled from 'styled-components';
import { useAddProduct } from '../model/addProduct';

const ButtonQuantity = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  text-align: center;
`;

const ButtonDelete = styled.button`
  width: 50px;
  height: 20px;
  border-radius: 6px;
  background-color: red;
  font-size: 0.9rem;
`;

interface PropsButtonsOfQuantity {
  quantity: number;
  id: number;
}

export const ButtonsOfQuantity = (props: PropsButtonsOfQuantity) => {
  const [addProduct, isLoading] = useAddProduct();

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: '5px',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <ButtonQuantity onClick={() => addProduct(props.id, 'minus')}>
        -
      </ButtonQuantity>
      <span>{props.quantity}</span>
      <ButtonQuantity onClick={() => addProduct(props.id, 'plus')}>
        +
      </ButtonQuantity>
      <ButtonDelete onClick={() => addProduct(props.id, 'remove')}>
        delete
      </ButtonDelete>
    </div>
  );
};
