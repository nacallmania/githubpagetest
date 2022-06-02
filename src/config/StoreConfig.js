import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import { reduxBatch } from '@manaflair/redux-batch'

import myReducer from '../reducer/Myreducer';
import secondReducer from '../reducer/SecondReducer';

// Reducer 목록을 가진다.
const rootReducer = combineReducers({
  red: myReducer,  
  blue: secondReducer
});

const initialState = {
    red: { 
        guest: {
            name : "haha",    
        } 
    },
    blue: { 
        service: {
            name : "service name",    
            desc : "초기 서비스 desc 값"
        } 
    },
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
//  preloadedState : preloadedState,
  preloadedState: initialState,
  enhancers: [reduxBatch],
});

//export type RootState = ReturnType<typeof store.getState>;
//export type AppDispatch = typeof store.dispatch;
//export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;