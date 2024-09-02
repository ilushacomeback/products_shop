import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useLazy, Product, selectors } from '@/shared';
import { useSelector } from 'react-redux';

interface ProductProps {
  product: Product;
  isLast: boolean;
  AddProductButton: React.FC<{ id: number }>;
}

const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  width: 250px;
  height: 400px;
  background: white;
`;

const Span = styled.span`
  font-weight: 400;
  font-size: 24px;
`;

export const CardProduct = ({
  product,
  isLast,
  AddProductButton,
}: ProductProps) => {
  const { name, price, image, id } = product;
  const trackedItem = useRef(null);
  const { lazy, optionsObserver } = useLazy();
  const isLazy = useSelector(selectors.productsSelectors.selectLazy)

  const observer = new IntersectionObserver(lazy, optionsObserver);

  useEffect(() => {
    if (trackedItem.current && isLazy) {
      observer.observe(trackedItem.current);
    }
  }, [isLazy]);

  return (
    <Li {...(isLast ? { ref: trackedItem } : {})}>
      <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Span>${price}</Span>
        <AddProductButton id={id} />
      </div>
    </Li>
  );
};
