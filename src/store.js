"use client"
import { configureStore } from '@reduxjs/toolkit';
import cartValue from './utils/cartValue';

export default configureStore({
  reducer: {counter: cartValue}
})