import { createAction } from '@reduxjs/toolkit';
import { Order } from '../../types/Order';

export const setOrders = createAction<Order[]>('orders/setOrders');