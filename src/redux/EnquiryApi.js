import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const EnquiryApi = createApi({
  reducerPath: "EnquiryApi",
  baseQuery: fetchBaseQuery({
        baseUrl:import.meta.env.VITE_API,

    // baseUrl: "https://sboa-backend.onrender.com/api/v1",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Accept", "application/json");
      // Don't set content-type manually if using FormData
      return headers;
    },
  }),
  tagTypes: ["enquiry"],
  endpoints: (builder) => ({
    addEnquiry: builder.mutation({
      query: (body) => ({
        url: `/api/v1/enquiry`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["enquiry"],
    }),
    addAlumniData: builder.mutation({
      query: (body) => ({
        url: `/api/v1/alumni`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["enquiry"],
    }),
  }),
});

export const { useAddEnquiryMutation, useAddAlumniDataMutation } = EnquiryApi;
