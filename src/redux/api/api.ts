import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"], // cache name
  endpoints: (builder) => ({
    getTodos: builder.query({
      //   query: (priority) => ({
      //     url: `/tasks`,
      //     // url: `/tasks?priority=${priority}`, // first approcah
      //     method: "GET",
      //     params: { priority }, // second approach
      //   }),
      //   providesTags: ["todo"], // cache generate name
      // }),
      query: (priority) => {
        const params = new URLSearchParams();

        if (priority) {
          params.append("priority", priority);
        }

        return {
          url: `/tasks`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"], // cache generate name
    }),
    addTodos: builder.mutation({
      query: (data) => {
        console.log("inside base api", data);
        return {
          url: "/tasks",
          method: "POST",
          body: { data },
        };
      },
      invalidatesTags: ["todo"],
    }),
    deleteTodos: builder.mutation({
      query: (id) => {
        return {
          url: `/tasks/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["todo"],
    }),
    updateTodos: builder.mutation({
      query: (options) => {
        console.log("inside base api", options?.data);
        return {
          url: `/tasks/${options?.id}`,
          method: "PUT",
          body: options?.data,
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodosMutation,
  useDeleteTodosMutation,
  useUpdateTodosMutation,
} = baseApi;
