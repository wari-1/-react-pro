export const newProducts = (cart, products) => {
  return cart && cart.productsIdsInCart.length && products.length
    ? cart.productsIdsInCart.map(item => {
        const currentProduct = products.find(ele => ele.id === item);
        return {
          ...currentProduct,
          num: cart.quantityById[item]
        };
      })
    : [];
};
export const total = (cart, products) => {
  return newProducts(cart, products).reduce(
    (res, item) => res + item.num * item.price,
    0
  );
};
