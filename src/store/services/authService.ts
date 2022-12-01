import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authService = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://task.samid.uz/v1" }),
  endpoints: (builder) => ({
    login: builder.mutation<
      { accessToken: string },
      { username: string; password: string }
    >({
      query: (body) => `pokemon`,
    }),
  }),
});
