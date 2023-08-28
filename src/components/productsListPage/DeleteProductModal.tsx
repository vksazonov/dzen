import React, { FC } from 'react';
import './styles/DeleteProductModal.scss';
import classNames from 'classnames';
import { Product } from '../../types/Product';
import { CloseButton } from '../utils/CloseButton';
import { useModalContext } from '../../context/ModalContext';

interface Props {
  product: Product;

}

export const DeleteProductModal: FC<Props> = ({ product }) => {

  const {  handleCloseModal } = useModalContext();
  return (
    <div className="modal">
      <div className="modal__background">
        <div className="modal__container">
          <CloseButton />
          <div className="modal__title">
            <h2>Вы уверены, что хотите удалить этот товар?</h2>
          </div>

          <div className="modal__body">
            <div className={classNames('product__status-indicator', {
              'back-green': product.specification === 'Specification 1',
              'back-gray': product.specification === 'Specification 2'
            })}></div>

            <div className="product__photo-container">
              <img src={product.photo} alt="" className="product__photo" />
            </div>

            <div className="product__description">
              <span className='product__title'>{product.title}</span>
              <span className='product__serial'>SN-{product.serialNumber}</span>
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
                <img 
                  src='./images/bucket.svg' 
                  alt="bucket" 
                  className='modal__button--delete-icon' 
                />
                УДАЛИТЬ
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};