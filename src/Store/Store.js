import { configureStore } from '@reduxjs/toolkit'

import counterReducer from "../Store/features/CounterSlice"
import counterReducer2 from "../Store/features/Emailfeacture"

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    counter2 : counterReducer2
  },
})