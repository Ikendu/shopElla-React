import { createSlice } from '@reduxjs/toolkit'
import { items } from '../../features/CBody/items'

const initialState = {
  products: items,
  sales: [],
  total: 0,
  counter: 0,
  isOpen: false,
  isLoading: true,
  add: `Item Added to Cart`,
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
      let index = state.sales.findIndex((items) => items.id === payload.id)
      if (index == -1) {
        let selected = state.products.find((item) => item.id === payload.id)
        state.sales.push(selected)
      }
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

    calculate: (state) => {
      let counts = 0
      let total = 0
      state.sales.map((item) => {
        counts += item.count
        total += item.price * item.count
      })
      state.counter = counts
      state.total = total
    },
    productAdd: (state, { payload }) => {
      let cartItem = state.products.find((prod) => prod.id === payload.id)
      cartItem.added = true
    },
    addToCart: (state, { payload }) => {
      let cartItem = state.products.find((prod) => prod.id === payload.id)
      cartItem.added = false
    },
  },
})

export const {
  openCart,
  closeCart,
  addItems,
  removeItem,
  increaseBtn,
  decreaseBtn,
  calculate,
  productAdd,
  addToCart,
} = cartReducer.actions

export default cartReducer.reducer
