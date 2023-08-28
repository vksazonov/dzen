import React, { FC } from 'react';
import './styles/DeleteOrderModal.scss';
import { Order } from '../../types/Order';
import { useModalContext } from '../../context/ModalContext';

interface Props {
  order: Order;

}

export const DeleteOrderModal: FC<Props> = ({ order }) => {
  const { handleCloseModal } = useModalContext();
  return (
    <div className="modal">
      <div className="modal__background">
        <div className="modal__container">
          <button
            type="button"
            className="modal__button--close"
            onClick={handleCloseModal}
          >
            X
          </button>

          <div className="modal__title">
            <h2>Вы уверены, что хотите удалить этот заказ?</h2>
          </div>

          <div className="modal__body">

            <div className="products__description">
              <span className='product__title'>{order.title}</span>
            </div>
          </div>

          <div className="modal__footer">
            <div className="modal__buttons">
              <button
                type="button"
                className="modal__button"
                onClick={handleCloseModal}
              >
              ОТМЕНИТЬ
              </button>

              <button
                type="button"
                className="modal__button modal__button--delete"
                onClick={handleCloseModal}
              >
                <img src='./images/bucket.svg' alt="bucket" className='modal__button--delete-icon' />
                УДАЛИТЬ
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};