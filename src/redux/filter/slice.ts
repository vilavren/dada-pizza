import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterSliceState, SortPropertyEnum, TSort } from './types'

const initialState: FilterSliceState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'популярные',
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,

  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    setSort(state, action: PayloadAction<TSort>) {
      state.sort = action.payload
    },
  },
})

export const { setSearchValue, setCategoryId, setCurrentPage, setSort } =
  filterSlice.actions

export default filterSlice.reducer
