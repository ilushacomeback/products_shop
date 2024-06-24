import styled from 'styled-components';
import type { Product } from '../../../shared';
import { UI } from '../../../shared';

interface ProductProps {
  product: Product;
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
`

export const CardProduct: React.FC<ProductProps> = ({ product }) => {
  const { name, price, image } = product;
  const { CustomSubmit } = UI;

  return (
    <Li>
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
