import React, { useCallback } from 'react';
import './styles/FilterAndSort.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setFilter, setSort } from '../../redux/actions/productActions';
import { useTranslation } from 'react-i18next';

export const FilterAndSort = () => {
  const products = useSelector((state: RootState) => state.product.products);
  const filter = useSelector((state: RootState) => state.product.filter);
  const sort = useSelector((state: RootState) => state.product.sort);

  const {t} = useTranslation();

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

  const filterOptions = t('product.filter');
  const sortingOptions = t('product.sorting');

  return (
    <div className="products__upper-part">
      <h1 className="products__header"> {t('product.title')} / {products.length}</h1>

      <span className="products__type">{t('product.type')}</span>

      <select
        className="products__type-select"
        onChange={handleFilter}
        value={filter}
      >
        <option value="all">{t('filter.all')}</option>
        <option value="laptops">{t('filter.laptops')}</option>
        <option value="monitors">{t('filter.monitors')}</option>
        <option value="consoles">{t('filter.consoles')}</option>
        <option value="tvs">{t('filter.tvs')}</option>
        <option value="phones">{t('filter.phones')}</option>
      </select>

      <span className="products__type">{t('product.sort')}:</span>

      <select
        className="products__type-select"
        onChange={handleSort}
        value={sort}
      >
        <option value="default">-</option>
        <option value="name">{t('sorting.byName')}</option>
        <option value="price-up">{t('sorting.byPriceAsc')}</option>
        <option value="price-down">{t('sorting.byPriceDesc')}</option>
        <option value="date-up">{t('sorting.byDateAsc')}</option>
        <option value="date-down">{t('sorting.byDateDesc')}</option>
      </select>
    </div>
  );
};
