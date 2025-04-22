import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice.js'
import userReducer from './user/userSlice.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,

  },
})