import { createAction } from '@reduxjs/toolkit';
import { Product } from '../../types/Product';

export const setProducts = createAction<Product[]>('product/setProducts');
export const setFilter = createAction<string>('product/setFilter');
export const setSort = createAction<string>('product/setSort');