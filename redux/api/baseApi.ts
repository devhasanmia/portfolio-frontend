import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://portfolio-server-one-olive.vercel.app/api/v1" }),
  tagTypes: ["blog", "skill", "project"],
  endpoints: () => ({}),
});

