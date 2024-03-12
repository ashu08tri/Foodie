"use client"
import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cartValue',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value = 0
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement} = cartSlice.actions

export default cartSlice.reducer