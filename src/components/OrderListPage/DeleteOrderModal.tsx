import React, { FC } from 'react';
import './styles/DeleteOrderModal.scss';
import { Order } from '../../types/Order';
import { useDispatch, useSelector } from 'react-redux';
import { handleCloseModal } from '../../redux/reducers/modalReducer';
import { RootState } from '../../redux/store';
import { useTranslation } from 'react-i18next';

interface Props {
  order: Order;
}

export const DeleteOrderModal: FC<Props> = ({ order }) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const openModal = useSelector((state: RootState) => state.modal.openModal);

  const closeModal = () => {
    dispatch(handleCloseModal());
  };

  return (
    <div className={`modal ${openModal === order.id ? 'modal--open' : ''}`}>
      <div className="modal__background">
        <div className="modal__container">
          <button
            type="button"
            className="modal__button--close"
            onClick={closeModal}
          >
            X
          </button>

          <div className="modal__title">
            <h2>{t('deleteOrder')}</h2>
          </div>

          <div className="modal__body">
            <div className="products__description">
              <span className="product__title">{order.title}</span>
            </div>
          </div>

          <div className="modal__footer">
            <div className="modal__buttons">
              <button
                type="button"
                className="modal__button"
                onClick={closeModal}
              >
                {t('cancel')}
              </button>

              <button
                type="button"
                className="modal__button modal__button--delete"
                onClick={closeModal}
              >
                <img
                  src="./images/bucket.svg"
                  alt="bucket"
                  className="modal__button--delete-icon"
                />
                {t('delete')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
