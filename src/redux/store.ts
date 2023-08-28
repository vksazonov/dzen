import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/searchReducer';
import productReducer from './reducers/productReducer';
import orderReducer from './reducers/orderReducer';
import modalReducer from './reducers/modalReducer';


const rootReducer = combineReducers({
  product: productReducer,
  order: orderReducer,
  search: searchReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});


export default store;