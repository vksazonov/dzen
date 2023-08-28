import React, { FC } from 'react';
import { Order } from '../../types/Order';
import { fullDate, shortenDate } from '../../utils/dateUtils';
import '../../App.scss';
import './styles/OrderItem.scss';
import { useProductContext } from '../../context/ProductContext';
import { totalPrice } from '../../utils/totalPriceUtils';
import { DeleteOrderModal } from './DeleteOrderModal';
import classNames from 'classnames';
import { useModalContext } from '../../context/ModalContext';

interface Props {
  order: Order;
  openMoreId: null | number;
  handleOpenMore: (id: number) => void;
}

export const OrderItem: FC<Props> = ({ order, openMoreId, handleOpenMore }) => {
  const { products } = useProductContext();
  const { totalDollar, totalHryvna } = totalPrice(order.products, products);
  const { openModal, handleOpenModal} = useModalContext();
  const {
    id,
    title,
    date
  } = order;

  return (
    <div className={classNames('order__item', { 'short': openMoreId })}>
      <div className="order__item-wrapper">
        {!openMoreId && (
          <div className="order__item-title">
            <span className="order__item-title-text">{title}</span>
          </div>
        )}

        <div className="order__button-container">
          <button
            className="order__item-more"
            onClick={() => handleOpenMore(id)}
          >
            <img
              src="./images/more.svg"
              alt="Show more"
              className="order__item-more-pic"
            />
          </button>
        </div>

        <div className="order__item-quantity">
          <span className="order__item-quantity-number">
            {order.products.length}
          </span>
          <span className="order__item-quantity-text">Продукта</span>
        </div>

        <div className="date">
          <span className="date-short">{shortenDate(date)}</span>
          <span className="date-long">{fullDate(date)}</span>
        </div>

        {!openMoreId ? (
          <>
            <div className="price">
              <span className="price-value light-gray">{totalDollar} $</span>
              <span className="price-value dark-gray">{totalHryvna} UAH</span>
            </div>

            <div className="delete">
              <button className="delete-button" onClick={() =>handleOpenModal(id)}>
                <img
                  src="./images/bucket.svg"
                  alt="bucket"
                  className="delete-icon"
                />
              </button>
            </div>
          </>
        ) : (
          <div className="close">
            <button
              className="close-button"
              onClick={() => handleOpenMore(id)}
            >
              <img
                src="./images/arrow.svg"
                alt="bucket"
                className="close-icon"
              />
            </button>
          </div>
        )}

        {openModal && (
          <DeleteOrderModal order={order} />
        )}
      </div>
    </div>
  );
};
