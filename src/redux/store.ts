import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
export const store = configureStore({
    reducer: {
        searchReducer, 
    },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;