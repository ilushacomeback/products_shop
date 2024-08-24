import { useGetCategoriesQuery, UI, useAppDispatch, actions } from '@/shared';
import styled from 'styled-components';

interface Category {
  category: string;
  id: number;
}

const Ul = styled.ul`
  @media(max-width: 407px) {
    display: none;
  }
`

export const Categories = () => {
  const dispatch = useAppDispatch()
  
  const handleClick = (category: Category) => {
    dispatch(actions.getCategory(category.category));
  };

  const { CustomSubmit } = UI;
  const { data }: { data?: Category[] } = useGetCategoriesQuery(undefined);

  return !data ? (
    <div>loading...</div>
  ) : (
    <Ul>
      {data.map((category) => (
        <li key={category.category}>
          <CustomSubmit
            color="white"
            onClick={() => handleClick(category)}
          >
            {category.category}
          </CustomSubmit>
        </li>
      ))}
    </Ul>
  );
};
