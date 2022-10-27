export interface FilterSliceState {
  searchValue: string
  categoryId: number
  currentPage: number
  sort: TSort
}

export type TSort = {
  name: string
  sortProperty: SortPropertyEnum
}
export enum SortPropertyEnum {
  RATING_DESC = 'rating',
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}
