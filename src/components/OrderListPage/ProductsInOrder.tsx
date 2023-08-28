import React, { FC } from 'react';
import { Order } from '../../types/Order';
import './styles/ProductsInOrder.scss';
import '../productsListPage/styles/ProductList.scss';
import { useProductContext } from '../../context/ProductContext';
import classNames from 'classnames';
import { useModalContext } from '../../context/ModalContext';
import { DeleteButton } from '../utils/DeleteButton';
import { DeleteProductModal } from '../productsListPage/DeleteProductModal';

interface Props {
  chosenOrder: Order;
  setOpenMoreId: (id: number) => void;
}

export const ProductsInOrder: FC<Props> = ({
  chosenOrder,
  setOpenMoreId,
}) => {
  const { products } = useProductContext();
  const { openModal, handleOpenModal } = useModalContext();

  const orderedProducts = products.filter((product) => {
    return chosenOrder.products.some((id) => id === product.id);
  });

  return (
    <div className="product-card">
      <button
        type="button"
        className="modal__button--close"
        onClick={() => setOpenMoreId(0)}
      >
        X
      </button>

      <div className='product-card__wrapper'>
        <div className="product-card__title">{chosenOrder.title}</div>

        <button className="product-card__add">
          <img
            src="./images/add.png"
            alt="Add product"
            className="product-card__add-pic"
          />
          <span className="product-card__add-text">Добавить продукт</span>
        </button>

        <div className="product__list">
          {orderedProducts.map((product) => (
            <div className="product__item" key={product.id}>
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
                <span className="product__serial">
                  SN-{product.serialNumber}
                </span>
              </div>

              <div className="product__status">
                <span
                  className={classNames('product__status-text', {
                    green: product.specification === 'Specification 1',
                    gray: product.specification === 'Specification 2',
                  })}
                >
                  {product.specification === 'Specification 1'
                    ? 'Свободен'
                    : 'В ремонте'}
                </span>
              </div>

              <DeleteButton 
                handleOpenModal={() => handleOpenModal(product.id)}
                prodId = {product.id}
              />

              {openModal === product.id && (
                <DeleteProductModal
                  product={product}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
