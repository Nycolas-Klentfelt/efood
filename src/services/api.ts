import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MenuItem, Restaurantes } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurantes, void>({
      query: () => 'restaurantes'
    }),
    getProduct: builder.query<MenuItem, string>({
      query: (id) => `restaurantes/perfil/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetProductQuery } = api

export default api
