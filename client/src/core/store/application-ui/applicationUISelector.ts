import type { RootState } from '../store'

export const selectLanguage = (state: RootState) => state.applicationUIReducer.language
