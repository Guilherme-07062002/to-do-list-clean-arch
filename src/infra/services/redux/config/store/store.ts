import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CreateReducer, ListReducer } from './../reducers';

const rootReducer = combineReducers({
  create: CreateReducer,
  list: ListReducer,
});

export const ReduxAppStore = configureStore({ reducer: rootReducer });
