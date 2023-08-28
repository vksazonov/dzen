import React, { useCallback, useEffect, useState } from 'react';
import './styles/OrderList.scss';
import { ordersFromServer } from '../../api/orders';
import { OrderItem } from './OrderItem';
import { ProductsInOrder } from './ProductsInOrder';
import { useOrderContext } from '../../context/OrderContext';


export const OrderList = () => {
  const [openMoreId, setOpenMoreId] = useState<number>(0);
  const { orders, setOrders } = useOrderContext();

  const handleOpenMore = useCallback((id: number) => {
    setOpenMoreId(prevId => (prevId === id ? 0 : id));
  }, []);
  
  const chosenOrder = openMoreId !== 0 
    ? orders.find(order => order.id === openMoreId) 
    : null;

  useEffect(() => {
    setOrders(ordersFromServer);
  });

  return (
    <div className="order__wrapper">
      <div className="order">
        <div className="order__upper-part">
          <button className="order__add">
            <img src="./images/add.png" alt="add" className="order__add-icon" />
          </button>

          <h1 className='order__header'> Заказы / {orders.length}</h1>
        </div>

        {orders.length < 1 && 
        <h2 className='not-found'>Сейчас нет доступных заказов</h2>
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