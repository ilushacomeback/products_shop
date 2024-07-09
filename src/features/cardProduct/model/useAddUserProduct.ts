export const useAddUserProduct = (
  addProduct: (products: Record<string, number>) => void,
  products: Record<string, number>,
  productId: string,
  side?: string
) => {
  const num = side === 'minus' ? -1 : 1
  const quantity = products[productId] ? products[productId] + num : 1;
  const newProducts = { ...products, [productId]: quantity };
  addProduct(newProducts);
};
