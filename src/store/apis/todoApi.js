import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: builder => ({
    // definimos nuestros endpoints
    getTodos: builder.query({
      query: () => '/todos', // => 'https://jsonplaceholder.typicode.com/todos'
    }),
  }),
});

// useGetTodosQuery: Es un hook que fue creado automaticamente al definir un endpoint. use + EndpointName + Query >>> useGetTodosQuery
export const { useGetTodosQuery } = todoApi;
