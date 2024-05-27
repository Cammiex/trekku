import { configureStore } from '@reduxjs/toolkit';
import getAllProductsReducer from './slices/products/getProducts';
import getOneProductReducer from './slices/products/getProductsById';

const store = configureStore({
  reducer: {
    products: getAllProductsReducer,
    oneProduct: getOneProductReducer,
  },
});

export default store;
