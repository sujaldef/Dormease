// store.js
import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './slices/peopertySlice';

export const store = configureStore({
  reducer: {
    property: propertyReducer,
  },
});
export default store;