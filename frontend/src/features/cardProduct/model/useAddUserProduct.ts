export const useAddUserProduct = (
  addProduct: (products: Record<string, number>) => void,
  products: Record<string, number> | string,
  productId: string,
  side?: string
) => {
  const curProducts = typeof products === 'string' ? JSON.parse(products) : products
  const minusOrPlus = side === 'minus' ? -1 : 1;
  const quantity = curProducts[productId] ? curProducts[productId] + minusOrPlus : 1;
  console.log('tut', products, productId, quantity)
  const newProducts = { ...curProducts, [productId]: quantity }
  if (!quantity || side === 'remove') {
    delete newProducts[productId];
  }
  console.log('respr', newProducts)
  addProduct(newProducts);
};
