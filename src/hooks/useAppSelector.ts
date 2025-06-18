import { useSelector } from 'react-redux'
import type { RootState } from '@/framework/store'

export const useAppSelector = useSelector.withTypes<RootState>()
