import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Theme } from '@/interface'

interface GlobalState {
    appTheme: Theme
}

const initialState: GlobalState = {
    appTheme: 'light'
}

export const globalSlice = createSlice({
    name: 'globalSlice',
    initialState,
    reducers: {
        setAppTheme: (state: GlobalState, action: PayloadAction<Theme>) => {
            return {
                ...state,
                appTheme: action.payload
            }
        }
    },
    selectors: {
        getAppTheme: (state) => state.appTheme
    }
})

export const { setAppTheme } = globalSlice.actions

export const { getAppTheme } = globalSlice.selectors

export default globalSlice.reducer
