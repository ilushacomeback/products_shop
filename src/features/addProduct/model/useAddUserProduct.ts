export const useAddUserProduct = (
  addProduct: (products: Record<string, number>) => void,
  products: Record<string, number>,
  productId: string
) => {
  const quantity = products[productId] ? products[productId] + 1 : 1;
  const newProducts = { ...products, [productId]: quantity };
  addProduct(newProducts);
};
