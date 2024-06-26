import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { UI, useLazy, Product } from '@/shared';

interface ProductProps {
  product: Product;
  isLast: boolean;
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
  font-weight: 800;
  font-size: 24px;
`;

export const CardProduct = ({ product, isLast }: ProductProps) => {
  const { name, price, image } = product;
  const { CustomSubmit } = UI;
  const trackedItem = useRef(null);
  const { lazy, optionsObserver } = useLazy();

  const observer = new IntersectionObserver(lazy, optionsObserver);

  useEffect(() => {
    if (isLast && trackedItem.current) {
      observer.observe(trackedItem.current);
    }
  }, []);

  return (
    <Li ref={trackedItem}>
      <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Span>{price}</Span>
        <CustomSubmit type="button">Add</CustomSubmit>
      </div>
    </Li>
  );
};
