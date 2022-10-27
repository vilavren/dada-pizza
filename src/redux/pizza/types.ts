export interface PizzaSliceState {
  items: Pizza[]
  status: Status
}
export type Pizza = {
  id: string
  title: string
  price: number
  imageUrl: string
  type: number[]
  size: number[]
  rating: number
}

export type SearchPizzaParams = {
  currentPage: string
  category: string
  sortBy: string
  order: string
  search: string
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
