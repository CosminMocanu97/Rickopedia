import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import characterReducer from "./characterDetailsSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    character: characterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
