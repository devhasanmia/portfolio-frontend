import { baseApi } from "@/redux/api/baseApi";

const projectApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProjects: builder.query({
            query: () => ({
              url: "/project/all",
              method: "GET",
            }),
            providesTags: ["project"]
          }),
          getProjectById: builder.query({
              query: (id) => ({
                url: `/project/${id}`,
                method: "GET",
              }),
              providesTags: ["project"]
          })
    }),
})

export const { useGetAllProjectsQuery, useGetProjectByIdQuery} = projectApi;