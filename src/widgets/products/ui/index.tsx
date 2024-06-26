import styled from 'styled-components';
import {
  selectors,
  useAppSelector,
  useGetProductsQuery,
} from '@/shared';
import { CardProduct } from '@/entities';
import { ObserverProvider } from '@/shared';

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 10px 20px;
`;

export const Products = () => {
  const page = useAppSelector(selectors.productsSelectors.selectCurrentPage);
  useGetProductsQuery(page);
  const products = useAppSelector(selectors.productsSelectors.selectProducts);

  return !products ? (
    <div>loading...</div>
  ) : (
    <ObserverProvider>
      <Ul>
        {products.map((product, i) => (
          <CardProduct
            product={product}
            key={product.id}
            isLast={i === products.length - 1}
          />
        ))}
      </Ul>
    </ObserverProvider>
  );
};
