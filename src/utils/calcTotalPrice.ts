import { TCartItem } from '../redux/slices/cartSlice'

export const calcTotalPrice = (items: TCartItem[]) => {
  return items.reduce((sum, item) => item.price * item.count + sum, 0)
}
