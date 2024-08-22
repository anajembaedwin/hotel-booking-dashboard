import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './slices/customerSlice';
import bookingReducer from './slices/bookingSlice';
import financeReducer from './slices/financeSlice';

const store = configureStore({
  reducer: {
    customer: customerReducer,
    booking: bookingReducer,
    finance: financeReducer,
  },
});

export default store;
