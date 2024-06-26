import { Products } from '@/widgets';
import { Categories } from '@/features';

export const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Categories />
      <Products />
    </div>
  )
};
