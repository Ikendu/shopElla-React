import { createSlice } from '@reduxjs/toolkit'
import { items } from '../../features/CBody/items'

const initialState = {
  products: items,
  sales: [],
  total: 0,
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
    removeItem: (state, action) => {
      let newItems = state.sales.filter((item) => item.id !== action.payload)
      state.sales = newItems
    },
    increaseBtn: (state, { payload }) => {
      let cartItem = state.sales.find((prod) => prod.id === payload)
      cartItem.count = cartItem.count + 1
    },
    decreaseBtn: (state, { payload }) => {
      let cartItem = state.sales.find((prod) => prod.id === payload)
      cartItem.count = cartItem.count - 1
    },
    calculate: (state, { payload }) => {
      let counts = 0
      let total = 0
      state.sales.map((item) => {
        counts += item.count
        total += item.price * item.count
      })
      state.counter = counts
      state.total = total
    },
  },
})

export const { openCart, closeCart, addItems, removeItem, increaseBtn, decreaseBtn, calculate } =
  cartReducer.actions

export default cartReducer.reducer
