import { useGetCategories, UI, useAppDispatch, actions } from '@/shared';
import styled from 'styled-components';

interface Category {
  category: string;
  id: number;
}

interface Categories {
  data: Category[];
}

const Ul = styled.ul`
  @media (max-width: 407px) {
    display: none;
  }
`;

export const Categories = () => {
  const dispatch = useAppDispatch();

  const handleClick = (category: Category) => {
    dispatch(actions.getCategory(category.category));
  };

  const { CustomSubmit } = UI;
  const { data }: { data?: Categories } = useGetCategories(undefined);

  return !data ? (
    <div>loading...</div>
  ) : (
    <Ul>
      {data.data.map((category) => (
        <li key={category.category}>
          <CustomSubmit color="white" onClick={() => handleClick(category)}>
            {category.category}
          </CustomSubmit>
        </li>
      ))}
    </Ul>
  );
};
