import { useGetCategoriesQuery, UI } from '@/shared';

interface Category {
  category: string;
  id: number;
}

export const Categories = () => {
  const handleClick = (category: Category) => {
    console.log(category.category);
  };

  const { CustomSubmit } = UI;
  const { data }: { data?: Category[] } = useGetCategoriesQuery(undefined);
  return !data ? (
    <div>loading...</div>
  ) : (
    <ul>
      {data.map((category) => (
        <li key={category.id}>
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
