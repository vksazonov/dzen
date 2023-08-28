import React, { FC } from 'react';
import './styles/DeleteProductModal.scss';
import classNames from 'classnames';
import { Product } from '../../types/Product';
import { CloseButton } from '../utils/CloseButton';
import { handleCloseModal } from '../../redux/reducers/modalReducer';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

interface Props {
  product: Product;
}

export const DeleteProductModal: FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const closeModal = () => {
    dispatch(handleCloseModal());
  };

  return (
    <div className="modal">
      <div className="modal__background">
        <div className="modal__container">
          <CloseButton />
          <div className="modal__title">
            <h2>{t('deleteProduct')}</h2>
          </div>

          <div className="modal__body">
            <div
              className={classNames('product__status-indicator', {
                'back-green': product.specification === 'Specification 1',
                'back-gray': product.specification === 'Specification 2',
              })}
            ></div>

            <div className="product__photo-container">
              <img src={product.photo} alt="" className="product__photo" />
            </div>

            <div className="product__description">
              <span className="product__title">{product.title}</span>
              <span className="product__serial">SN-{product.serialNumber}</span>
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
