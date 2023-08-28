import React, { FC } from 'react';
import './styles/ProductItem.scss';
import '../../App.scss';
import classNames from 'classnames';
import { Product } from '../../types/Product';
import { DeleteProductModal } from './DeleteProductModal';
import { shortenDate, fullDate } from '../../utils/dateUtils';
import { DeleteButton } from '../utils/DeleteButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setOpenModal } from '../../redux/reducers/modalReducer';
import { useTranslation } from 'react-i18next';

interface Props {
  product: Product;
}

export const ProductItem: FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const openModal = useSelector((state: RootState) => state.modal.openModal);

  const handleOpenModal = (orderId: number) => {
    dispatch(setOpenModal(orderId));
  };

  const {
    id,
    title,
    serialNumber,
    specification,
    photo,
    guarantee,
    isNew,
    order,
    date,
  } = product;

  return (
    <div className="product">
      <div className="product__item" key={id}>
        <div
          className={classNames('product__status-indicator', {
            'back-green': specification === 'Specification 1',
            'back-gray': specification === 'Specification 2',
          })}
        ></div>

        <div className="product__photo-container">
          <img src={photo} alt="" className="product__photo" />
        </div>

        <div className="product__description">
          <span className="product__title">{title}</span>
          <span className="product__serial">{serialNumber}</span>
        </div>

        <div className="product__status">
          <span
            className={classNames('product__status-text', {
              green: specification === 'Specification 1',
              gray: specification === 'Specification 2',
            })}
          >
            {specification === 'Specification 1' ? `${t('free')}` : `${t('repair')}`}
          </span>
        </div>

        <div className="product__guarantee">
          <div className="product__guarantee-block">
            <span className="product__guarantee-text">{t('from')}</span>
            <span className="product__guarantee-date">{guarantee.start}</span>
          </div>

          <div className="product__guarantee-block">
            <span className="product__guarantee-text">{t('to')}</span>
            <span className="product__guarantee-date">{guarantee.end}</span>
          </div>
        </div>

        <div className="product__novelty">
          <span className="product__novelty-text">
            {isNew === 1 ? `${t('new')}` : `${t('used')}`}
          </span>
        </div>

        <div className="price">
          {product.price.map((currency) => (
            <span
              className={classNames('price-value', {
                'dark-gray': currency.symbol === 'UAH',
                'light-gray': currency.symbol === 'USD',
              })}
              key={currency.symbol}
            >
              {currency.value} {currency.symbol === 'UAH' ? `${t('uah')}` : '$'}
            </span>
          ))}
        </div>

        <div className="product__orders">
          {order.length > 0 ? (
            <>
              <span className="product__orders-text">{t('orderNo')} №</span>
              <span className="product__orders-number">{order.join(', ')}</span>
            </>
          ) : (
            <span className="product__orders-text">-</span>
          )}
        </div>

        <div className="date">
          <span className="date-short">{shortenDate(date)}</span>
          <span className="date-long">{fullDate(date)}</span>
        </div>

        <DeleteButton
          handleOpenModal={() => handleOpenModal(product.id)}
          prodId={product.id}
        />
      </div>
      {openModal === id && <DeleteProductModal product={product} />}
    </div>
  );
};
