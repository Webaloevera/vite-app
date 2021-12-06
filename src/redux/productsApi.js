import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3001/` }),
  endpoints: (build) => ({
    productsApi: build.query({
      query: () => `products`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Posts", id })),
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
    }),
    creataProduct: build.mutation({
      query: (body) => ({
        url: `products`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Products", id: "LIST" }],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: [{ type: "Products", id: "LIST" }],
    }),
    editProduct: build.mutation({
        query: (id) => ({
          url: `products/${id}/edit`,
          method: "DELETE"
        }),
        invalidatesTags: [{ type: "Products", id: "LIST" }],
      }),
  }),
});

export const {
  useProductsApiQuery,
  useCreataProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
} = productsApi;
