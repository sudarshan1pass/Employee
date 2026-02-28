import { configureStore } from '@reduxjs/toolkit'
import createReducer from  '../Redux/createformSlice'

export const store = configureStore({
  reducer: {
    createform:createReducer
  },
})