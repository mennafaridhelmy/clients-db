import { configureStore } from '@reduxjs/toolkit';
import user from './redux/slice/user';
import users from './redux/slice/users';
import sagaMiddleware from '@redux-saga/core';
import { rootSaga } from './redux/sagas/index';

const saga = sagaMiddleware() ;

export const store = configureStore({
  reducer: {
      user : user,
      users : users
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({thunk:false}).concat(saga)
})
saga.run(rootSaga);