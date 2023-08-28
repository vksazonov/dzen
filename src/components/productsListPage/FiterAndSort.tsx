import React, { useCallback } from 'react';
import './styles/FilterAndSort.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setFilter, setSort } from '../../redux/actions/productActions';

export const FilterAndSort = () => {
  const products = useSelector((state: RootState) => state.product.products);
  const filter = useSelector((state: RootState) => state.product.filter);
  const sort = useSelector((state: RootState) => state.product.sort);

  const dispatch = useDispatch();

  const handleSort = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setSort(event.target.value));
    },
    [dispatch]
  );

  const handleFilter = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setFilter(event.target.value));
    },
    [dispatch]
  );

  return (
    <div className="products__upper-part">
      <h1 className="products__header"> Продукты / {products.length}</h1>

      <span className="products__type">Тип:</span>

      <select
        className="products__type-select"
        onChange={handleFilter}
        value={filter}
      >
        <option value="all">Все</option>
        <option value="monitors">Мониторы</option>
        <option value="consoles">Консоли</option>
        <option value="tvs">Телевизоры</option>
        <option value="phones">Телефоны</option>
      </select>

      <span className="products__type">Сортировка:</span>

      <select
        className="products__type-select"
        onChange={handleSort}
        value={sort}
      >
        <option value="default">-</option>
        <option value="name">По имени</option>
        <option value="price-up">По цене ↑</option>
        <option value="price-down">По цене ↓</option>
        <option value="date-up">По дате ↑</option>
        <option value="date-down">По дате ↓</option>
      </select>
    </div>
  );
};
