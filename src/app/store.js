import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import staffReducer from '../features/staff/staffSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    staff: staffReducer,
  },
});
