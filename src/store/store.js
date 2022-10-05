import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer/moviesSlice';
import middlewares from './middlewares';

const store = configureStore({
  reducer,
  middleware: [...middlewares],
});

export default store;
