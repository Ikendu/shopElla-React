import { createSlice } from '@reduxjs/toolkit'
import { items } from '../../features/CBody/items'

const initialState = {
  products: items,
  sales: [],
  total: 10,
  counter: 0,
  isOpen: false,
  isLoading: true,
}

const cartReducer = createSlice({
  name: `cart`,
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
    },
    addItems: (state, { payload }) => {
      let selected = state.products.find((items) => items.id === payload)
      state.sales.push(selected)
    },
  },
})

export const { openCart, closeCart, addItems } = cartReducer.actions

export default cartReducer.reducer
