import { RootState } from './../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum SortPropertyEnum {
  RATING_DESC = 'rating',
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}

export type TSort = {
  name: string
  sortProperty: SortPropertyEnum
}

export interface FilterSliceState {
  searchValue: string
  categoryId: number
  currentPage: number
  sort: TSort
}

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

export const selectFilter = (state: RootState) => state.filter
export const selectFilterSort = (state: RootState) => state.filter.sort

export const { setSearchValue, setCategoryId, setCurrentPage, setSort } =
  filterSlice.actions

export default filterSlice.reducer
