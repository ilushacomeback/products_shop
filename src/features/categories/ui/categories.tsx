import { useGetCategoriesQuery, UI, useAppDispatch, actions } from '@/shared';

interface Category {
  category: string;
  id: number;
}

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
    <ul>
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
    </ul>
  );
};
