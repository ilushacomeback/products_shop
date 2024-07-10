export const useAddUserProduct = (
  addProduct: (products: Record<string, number>) => void,
  products: Record<string, number>,
  productId: string,
  side?: string
) => {
  const minusOrPlus = side === 'minus' ? -1 : 1;
  const quantity = products[productId] ? products[productId] + minusOrPlus : 1;
  const newProducts = { ...products, [productId]: quantity }
  if (!quantity) {
    console.log(quantity, productId, newProducts)
    delete newProducts[productId];
  }
  
  addProduct(newProducts);
};
