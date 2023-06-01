import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice';
import selectedShopSlice from './slices/selectedShopSlice';
import cartSlice from './slices/cartSlice';

const store = configureStore({
  reducer: {
    products: productsSlice,
    selectedShop: selectedShopSlice,
    cart: cartSlice
  },
});

export default store;