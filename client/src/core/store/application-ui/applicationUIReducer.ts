import { TLocale } from '@/shared/types/TLocale'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const applicationUISlice = createSlice({
  name: 'application-ui',
  initialState: {
    language: 'en',
  },
  reducers: {
    setUILanguage: (state, action: PayloadAction<TLocale>) => {
      state.language = action.payload.twoLettersCode
    },
  },
})

export const { setUILanguage } = applicationUISlice.actions

export default applicationUISlice.reducer
