import localforage from 'localforage'

localforage.config({
    name: 'TEEA-HUB'
})

export const clearStorage = async () => await localforage.clear()

export const clearStorageItem = async (key: symbol) => await localforage.removeItem(key.toString())

export const setStorage = async <T>(key: symbol, value: T) => await localforage.setItem<T>(key.toString(), value)

export const getStorageItem = async <T>(key: symbol) => await localforage.getItem<T>(key.toString())
