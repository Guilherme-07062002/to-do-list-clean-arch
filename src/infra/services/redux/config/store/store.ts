import { configureStore } from "@reduxjs/toolkit";
import { CreateReducer } from './../reducers';

export const ReduxAppStore = configureStore({ reducer: CreateReducer });

export type RootState = ReturnType<typeof ReduxAppStore.getState>;
export type AppDispatch = typeof ReduxAppStore.dispatch;