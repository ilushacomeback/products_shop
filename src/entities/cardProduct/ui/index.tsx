import type { Product } from '../../../shared';

interface ProductProps {
  product: Product;
}

export const CardProduct: React.FC<ProductProps> = ({ product }) => {
  const { name, price, description, image } = product;
  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <span>{description}</span>
      <span>{price}</span>
    </div>
  );
};
