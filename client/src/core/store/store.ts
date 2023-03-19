import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import applicationUIReducer from './application-ui/applicationUIReducer'

export const store = configureStore({
  reducer: {
    applicationUIReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
