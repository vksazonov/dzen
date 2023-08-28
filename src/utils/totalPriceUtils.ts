import { Product } from '../types/Product';

export const totalPrice = (orderProducts: number[], products: Product[]) => {
  let totalDollar = 0;
  let totalHryvna = 0;

  orderProducts.forEach(id => {
    const product = products.find(prod => prod.id === id);
    if (product) {
      product.price.map(currency => {
        if (currency.symbol === 'USD') {
          totalDollar += currency.value;
        }
        if (currency.symbol === 'UAH') {
          totalHryvna += currency.value;
        }
      });
    }
  });

  return { totalDollar, totalHryvna };
};