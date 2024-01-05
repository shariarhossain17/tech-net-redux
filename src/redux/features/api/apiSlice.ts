import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8800/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    getSingleProduct: builder.query({
      query: (id) => `product/${id}`,
    }),

    commentPost: builder.mutation({
      query: ({ id, data }) => ({
        url: `comment/${id}`,
        method: "POST",
        body: data,
      }),
    }),

    getComment: builder.query({
      query: (id) => `comment/${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useCommentPostMutation,
} = api;
