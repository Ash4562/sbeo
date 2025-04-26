import { configureStore } from "@reduxjs/toolkit";
import { EnquiryApi } from "./EnquiryApi";
export const store = configureStore({
  reducer: {
    [EnquiryApi.reducerPath]: EnquiryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(EnquiryApi.middleware),
});
