import { useSearchProducts } from '@/shared/api/search';
import { throttle } from '../helpers/throttle';
import { ChangeEvent, useCallback, useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background-color: white;
  padding-left: 5px;
  border-radius: 5px;
  border: 1px solid gray;
`;

export const SearchProducts = () => {
  const [searchProducts] = useSearchProducts();
  const throttleSearch = useCallback(throttle(searchProducts, 1000), []);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    throttleSearch({ name: e.target.value });
  };

  return (
    <Input
      type="text"
      onChange={handleOnChange}
      placeholder="Поиск..."
    />
  );
};
