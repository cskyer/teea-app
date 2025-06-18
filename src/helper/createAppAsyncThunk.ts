import { createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState, AppDispatch } from '@/framework/store'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState,
    dispatch: AppDispatch,
    rejectValue: { code: number, message?: string }
}>()
