import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../reducers/task-reducer";

export const ReduxAppStore = configureStore({ reducer: taskReducer });
export type RootState = ReturnType<typeof ReduxAppStore.getState>;

export type AppDispatch = typeof ReduxAppStore.dispatch;