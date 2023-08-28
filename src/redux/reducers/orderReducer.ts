import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../../types/Order';
import { ordersFromServer } from '../../api/orders';
import { setOrders } from '../actions/orderActions';

interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: ordersFromServer,
};

const ordersReducer = createReducer(initialState, (builder) => {
  builder.addCase(setOrders, (state, action: PayloadAction<Order[]>) => {
    state.orders = action.payload;
  });
});

export default ordersReducer;