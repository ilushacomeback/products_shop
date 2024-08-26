import { Products } from '@/widgets';
import { Categories } from '@/features';

export const ProductsPage = () => {
  return (
    <div style={{ display: 'flex', padding: '0 20px' }}>
      <Categories />
      <Products />
    </div>
  )
};
