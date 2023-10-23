import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

const modelReducer = createSlice({
  name: `model`,
  initialState,
  reducers: {
    openModel: (state) => {
      state.isOpen = true
    },
    closeModel: (state) => {
      state.isOpen = false
    },
  },
})

export const { openModel, closeModel } = modelReducer.actions

export default modelReducer.reducer
