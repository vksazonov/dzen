import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredAndSortedProducts } from '../../redux/reducers/productReducer';
import { RootState } from '../../redux/store';
import { FilterAndSort } from './FiterAndSort';
import { ProductItem } from './ProductItem';
import { Product } from '../../types/Product';

export const ProductList = () => {
  const filteredAndSortedProducts: Product[] = useSelector(
    selectFilteredAndSortedProducts
  );
  const query = useSelector((state: RootState) => state.search.query);

  const searchFilteredProducts = filteredAndSortedProducts.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="products">
      <FilterAndSort />
      {searchFilteredProducts.length < 1 && (
        <h2 className="not-found">По вашему запросу ничего не найдено</h2>
      )}
      <div className="products__list">
        {searchFilteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
