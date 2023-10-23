import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cartRedecer'
import modalReducer from './reducers/modalReducer'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
})

export default store
