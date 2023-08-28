import { createReducer, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/Product';
import { RootState } from '../store';
import { setFilter, setProducts, setSort } from '../actions/productActions';

interface ProductState {
  products: Product[];
  filter: string;
  sort: string;
}

const initialState: ProductState = {
  products: [],
  filter: 'all',
  sort: 'default',
};

const sortFunctions = {
  name: (a: Product, b: Product) => a.title.localeCompare(b.title),
  'price-down': (a: Product, b: Product) => b.price[1].value - a.price[1].value,
  'price-up': (a: Product, b: Product) => a.price[1].value - b.price[1].value,
  'date-up': (a: Product, b: Product) => a.date.localeCompare(b.date),
  'date-down': (a: Product, b: Product) => b.date.localeCompare(a.date),
};

const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setProducts, (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    })
    .addCase(setFilter, (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    })
    .addCase(setSort, (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    });
});

export const selectFilteredAndSortedProducts = createSelector(
  (state: RootState) => state.product.products,
  (state: RootState) => state.product.filter,
  (state: RootState) => state.product.sort,
  (products, filter, sort) => {
    const filteredProducts = filter === 'all'
      ? products
      : products.filter((product) => product.type === filter);

    const compareFunction = sortFunctions[sort as keyof typeof sortFunctions] || null;

    const sortedProducts = [...filteredProducts];
    if (compareFunction) {
      sortedProducts.sort(compareFunction);
    }

    return sortedProducts;
  }
);

export default productReducer;