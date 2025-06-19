import { getStorageItem } from '@/helper'
import { storage } from '@/conf'

export const appLoader = async (): Promise<boolean> => {
    try {
        return !!await getStorageItem<string>(storage.STORAGE_USERINFO)
    } catch (error) {
        console.log(error)
        return false
    }
}
