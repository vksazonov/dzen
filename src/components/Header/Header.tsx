import React from 'react';
import './styles/Header.scss';
import { NavLink } from 'react-router-dom';
import { DateSection } from './DateSection';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setQuery } from '../../redux/reducers/searchReducer';
import { useTranslation } from 'react-i18next';


export const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.search.query);

  const handleInput = (newQuery: string) => {
    dispatch(setQuery(newQuery));
  };

  const handleReset = () => {
    dispatch(setQuery(''));
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <NavLink to="/" className="nav__link">
            <div className="header__logo">
              <img
                className="header__logo-image"
                src="./images/logo.jpg"
              />

              <span className="header__logo-text">
                Inventory
              </span>
            </div>
          </NavLink>

          <input
            className="header__input"
            type="text"
            placeholder={t('header.search')}
            value={query}
            onChange={(e) => handleInput(e.target.value)}
          />

          <button
            className="header__input-clear"
            disabled={query.length < 1}
            onClick={handleReset}
          >
            x
          </button>
        </div>
        <DateSection />
      </div>
    </header>
  );
};
