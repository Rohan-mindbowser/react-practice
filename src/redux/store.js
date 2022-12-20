import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import counterSlice from "./counterSlice";
import { productsApi } from "./productApiSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    counter: counterSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
