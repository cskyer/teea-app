import { configureStore, combineSlices } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { globalSlice } from '@/framework/reducer'

const isProd = process.env.NODE_ENV === 'production'

const store = configureStore({
    reducer: combineSlices(globalSlice),
    devTools: !isProd,
    middleware: (getDefaultMiddleware) => {
        if (isProd) return getDefaultMiddleware({ serializableCheck: false })
        return getDefaultMiddleware({ serializableCheck: false }).concat(logger)
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
