import { okHttp } from '@/helper'
import { auth } from '@/api'

/**
 * 登录
 */
export const loginAction = okHttp<{ params: { username: string, password: string } }>(auth.login)

/**
 * 登出
 */
export const logoutAction = okHttp<{ params: { username: string } }>(auth.logout)
