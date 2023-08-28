import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredAndSortedProducts } from '../../redux/reducers/productReducer';
import { RootState } from '../../redux/store';
import { FilterAndSort } from './FiterAndSort';
import { ProductItem } from './ProductItem';
import { setProducts } from '../../redux/actions/productActions';
import { productsFromServer } from '../../api/products';

export const ProductList = () => {
  const dispatch = useDispatch();
  const filteredAndSortedProducts = useSelector(selectFilteredAndSortedProducts);
  const query = useSelector((state: RootState) => state.search.query);

  const searchFilteredProducts = filteredAndSortedProducts.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    dispatch(setProducts(productsFromServer));
  }, [dispatch]);

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
