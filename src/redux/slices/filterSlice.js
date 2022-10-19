import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'популярные',
    sortProperty: 'rating',
  },
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,

  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload
    },
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
  },
})

export const selectFilter = (state) => state.filter
export const selectFilterSort = (state) => state.filter.sort

export const { setSearchValue, setCategoryId, setCurrentPage, setSort } =
  filterSlice.actions

export default filterSlice.reducer
