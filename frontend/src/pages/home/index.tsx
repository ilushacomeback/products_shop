import { Products } from '@/widgets';
import { Categories } from '@/features';

export const Home = () => {
  return (
    <div style={{ display: 'flex', padding: '0 20px' }}>
      <Categories />
      <Products />
    </div>
  )
};
