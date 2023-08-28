import React, { useCallback, useEffect, useState } from 'react';
import './styles/OrderList.scss';
import { OrderItem } from './OrderItem';
import { ProductsInOrder } from './ProductsInOrder';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ordersFromServer } from '../../api/orders';
import { setOrders } from '../../redux/actions/orderActions';
import { useTranslation } from 'react-i18next';
import { setProducts } from '../../redux/actions/productActions';
import { productsFromServer } from '../../api/products';

export const OrderList = () => {
  const [openMoreId, setOpenMoreId] = useState<number>(0);
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.order.orders);

  useEffect(() => {
    dispatch(setOrders(ordersFromServer));
    dispatch(setProducts(productsFromServer));
  }, [dispatch]);
  
  const handleOpenMore = useCallback((id: number) => {
    setOpenMoreId(prevId => (prevId === id ? 0 : id));
  }, []);

  const chosenOrder = openMoreId !== 0
    ? orders.find(order => order.id === openMoreId)
    : null;

  return (
    <div className="order__wrapper">
      <div className="order">
        <div className="order__upper-part">
          <button className="order__add">
            <img src="./images/add.png" alt="add" className="order__add-icon" />
          </button>

          <h1 className='order__header'>{t('orders')} / {orders.length}</h1>
        </div>

        {orders.length < 1 && 
        <h2 className='not-found'>{t('noOrders')}</h2>
        }

        <div className="order__list">
          {orders.map(order => (
            <OrderItem 
              key={order.id}
              order= {order}
              handleOpenMore= {handleOpenMore}
              openMoreId= {openMoreId}
            />
          ))}
        </div>
      </div>

      {chosenOrder && (
        <ProductsInOrder
          chosenOrder={chosenOrder}
          setOpenMoreId={setOpenMoreId}
        />
      )}
    </div>
  );
};
