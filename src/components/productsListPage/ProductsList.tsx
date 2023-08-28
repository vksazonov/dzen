import React, { useCallback, useState } from 'react';
import './styles/ProductList.scss';
import { Product } from '../../types/Product';
import { ProductItem } from './ProductItem';
import { FilterAndSort } from './FiterAndSort';
import { useProductContext } from '../../context/ProductContext';
import { useSearchContext } from '../../context/SearchContext';

export const ProductList = () => {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('default');

  const { products } = useProductContext();
  const { query } = useSearchContext();

  const filteredProducts = filter === 'all'
    ? products
    : products.filter((product) => product.type === filter);

  const searchFilteredProducts = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const sortFunctions = {
    name: (a: Product, b: Product) => a.title.localeCompare(b.title),
    'price-down': (a: Product, b: Product) => b.price[1].value - a.price[1].value,
    'price-up': (a: Product, b: Product) => a.price[1].value - b.price[1].value,
    'date-up': (a: Product, b: Product) => a.date.localeCompare(b.date),
    'date-down': (a: Product, b: Product) => b.date.localeCompare(a.date),
  };

  const compareFunction = sortFunctions[sort as keyof typeof sortFunctions] || null;

  if (compareFunction) {
    filteredProducts.sort(compareFunction);
  }

  const handleFilter = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => setFilter(event.target.value),
    []
  );

  const handleSort = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => setSort(event.target.value),
    []
  );

  return (
    <div className="products">
      <FilterAndSort
        filter={filter}
        sort={sort}
        handleFilter={handleFilter}
        handleSort={handleSort}
      />
      {searchFilteredProducts.length < 1 && 
        <h2 className='not-found'>По вашему запросу ничего не найдено</h2>
      }
      <div className="products__list">
        {searchFilteredProducts .map((product) => (
          <ProductItem 
            key={product.id} 
            product={product} 
          />
        ))}
      </div>
    </div>
  );
};
