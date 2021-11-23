import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Projects"],
  endpoints: (builder) => ({
    getHighlighted: builder.query({
      query: (id) => `projects/${id}`,
    }),
    getProjects: builder.query({
      query: () => `projects`,
    }),
  }),
});

export const { useGetHighlighted } = projectApi;
