import React, { FC } from 'react';
import './styles/FilterAndSort.scss';
import { useProductContext } from '../../context/ProductContext';

interface Props {
  filter: string;
  sort: string;
  handleFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FilterAndSort:FC<Props> = ({ 
  filter,
  sort,
  handleFilter,
  handleSort,
}) => {

  const { products } = useProductContext();
  
  return (
    <div className="products__upper-part">
      <h1 className='products__header'> Продукты / {products.length}</h1>

      <span className='products__type'>Тип:</span>

      <select 
        className='products__type-select'
        onChange={handleFilter} 
        value={filter}
      >
        <option value="all">Все</option>
        <option value="monitors">Мониторы</option>
        <option value="consoles">Консоли</option>
        <option value="tvs">Телевизоры</option>
        <option value="phones">Телефоны</option>
      </select>

      <span className='products__type'>Сортировка:</span>

      <select 
        className='products__type-select' 
        onChange={handleSort} 
        value={sort}>
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