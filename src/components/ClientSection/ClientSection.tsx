import React from 'react';
import './styles/ClientSection.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { LanguageChanger } from './LanguageChanger';
import { useTranslation } from 'react-i18next';

export const ClientSection = () => {
  const { t } = useTranslation();
  return (
    <nav className='client'>
      <div className='client__container'>
        <div className="client__photo-container">
          <img 
            src="./images/man.jpg" 
            alt="photo" 
            className="client__photo" 
          />
          <img 
            src="./images/settings.svg" 
            alt="settings" 
            className="client__settings" 
          />
        </div>

        <ul className="nav">
          <li className="nav__item">
            <NavLink to="/orders" className={({isActive }) => classNames('nav__link', {
              'is-active': isActive
            })}>
              {t('client.orders')}
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/" className={({isActive }) => classNames('nav__link', {
              'is-active': isActive
            })}>
              {t('client.products')}
            </NavLink>
          </li>
        </ul>

        <LanguageChanger />
      </div>
    </nav>
  );
};