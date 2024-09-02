import { useSearchProducts } from '@/shared/api/search';
import { ChangeEvent, useState } from 'react';

export const SearchProducts = () => {
  const [searchProducts] = useSearchProducts();
  const [value, setValue] = useState('');
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    searchProducts({ name: e.target.value });
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleOnChange}
      style={{ backgroundColor: 'white' }}
      placeholder="Поиск..."
    />
  );
};
