import axios from 'axios'
import qs from 'qs'
import { pathToRegexp } from 'path-to-regexp'
import { getStorageItem, clearStorage, createAppAsyncThunk } from '@/helper'
import { storage } from '@/conf'
import { notification } from '@/framework/app-notification'
import type { AxiosInstance, AxiosResponse, AxiosHeaderValue, Method, AxiosRequestHeaders } from 'axios'
import type { IRequest, IRequestItem, IResponse } from '@/interface'

interface RequestOptions {
    method?: Method;
    headers?: { [key: string]: AxiosHeaderValue };
    contentType?: AxiosRequestHeaders['ContentType'];
    params?: object;
    data?: object;
}

const instance: AxiosInstance = axios.create({
    timeout: 0,
    method: 'GET',
    responseType: 'json',
    headers: { 'Content-Type': 'application/json' },
    paramsSerializer: params => qs.stringify(params, { indices: false }),
})

instance.interceptors.request.use(
    async (config) => {
        config.headers['Token'] = await getStorageItem(storage.STORAGE_TOKEN) as string || ''
        return config
    },
    (error) => Promise.reject(error)
)

instance.interceptors.response.use(
    async <T>(response: AxiosResponse<IResponse<T>>) => {
        const { data: { code } } = response
        switch (code) {
            case 200:
                break
            case 401:
            case 403:
                await clearStorage()
                window.location.replace('/login')
                break
            default:
        }
        return response
    },
    async (error) => {
        let message: string = ''
        switch (error.response?.status) {
            case 400:
                message = '请求错误(400)'
                break
            case 401:
                message = '未授权，请重新登录(401)'
                await clearStorage()
                window.location.replace('/login')
                break
            case 403:
                message = '拒绝访问(403)'
                break
            case 404:
                message = '请求出错(404)'
                break
            case 408:
                message = '请求超时(408)'
                break
            case 500:
                message = '服务器错误(500)'
                break
            case 501:
                message = '服务未实现(501)'
                break
            case 502:
                message = '网络错误(502)'
                break
            case 503:
                message = '服务不可用(503)'
                break
            case 504:
                message = '网络超时(504)'
                break
            case 505:
                message = 'HTTP版本不受支持(505)'
                break
            default:
                message = `连接出错(${error.response.status})!`
        }
        notification.error({ message })
        return Promise.reject({ message })
    }
)

const getUrl = (url: string, params: IRequestItem = {}) => {
    let nUrl = url
    const nParams: IRequestItem = { ...params }
    const sParams: string[] = []

    const { keys } = pathToRegexp(nUrl, {})
    keys.forEach((item) => {
        if (nParams[item.name] === undefined) nParams[item.name] = ''
    })

    Object.keys(nParams).forEach((key) => {
        const reg1 = new RegExp(`:${key}\\?`, 'gm')
        const reg2 = new RegExp(`:${key}`, 'gm')

        if (reg1.test(nUrl) || reg2.test(nUrl)) {
            nUrl = nUrl.replace(reg1, nParams[key]).replace(reg2, nParams[key])
            delete nParams[key]
        } else {
            sParams.push(`${key}=${nParams[key]}`)
        }
    })

    return { nUrl, nParams, sParams }
}

const request = async <T>(url: string, {
    method = 'GET',
    headers = {},
    params = {},
    data = {}
}: RequestOptions): Promise<AxiosResponse<IResponse<T>>> => {
    instance.defaults.headers = {
        ...instance.defaults.headers,
        ...(headers as { [key: string]: AxiosHeaderValue })
    }

    const { nUrl, nParams, sParams } = getUrl(url, params)

    switch (method.toUpperCase()) {
        case 'GET':
            return instance.get(nUrl, { params: nParams })
        case 'POST':
            return instance.post(nUrl, data, { params: sParams.length > 0 ? sParams : {} })
        case 'PUT':
            return instance.put(nUrl, data, { params: sParams.length > 0 ? sParams : {} })
        case 'DELETE':
            return instance.delete(nUrl, { params: nParams, data })
        case 'PATCH':
            return instance.patch(nUrl, data, { params: sParams.length > 0 ? sParams : {} })
        default:
            return Promise.reject({ code: 300, message: 'ajax method params server-error!' })
    }
}

export const originHttp = (url: string, options = {}) => request(url, options)

export const okHttp = <R = IRequest | undefined, T = any>(
    url: string,
    options?: RequestOptions
) => createAppAsyncThunk(
        url,
        async (req: R, { rejectWithValue }) => {
            const response = await request<T>(url, { ...options, ...req })
            const { success, code, message, data } = response.data
            if (!success) {
                notification.error({ message: message })
                return rejectWithValue({ code, message })
            }
            return data as T
        }
    )
