import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/framework/store'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
