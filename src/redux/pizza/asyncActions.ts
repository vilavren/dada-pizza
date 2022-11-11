import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Pizza, SearchPizzaParams } from './types'

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { currentPage, category, sortBy, order, search } = params
    const { data } = await axios.get<Pizza[]>(
      `https://633c28faf11701a65f7063c4.mockapi.io/items?page=${currentPage}&${category}&sortBy=${sortBy}&order=${order}&${search}`
    )
    return data
  }
)
