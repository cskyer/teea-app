import type { ReactNode } from 'react'
import type { RouteObject } from 'react-router-dom'

export interface IRouteHandle {
    menuId?: number; // 是否显示在menu上
    icon?: ReactNode; // 图标
    key?: string; // 多语言中的key或是title
}

export type IRoute = Omit<RouteObject, 'handle' | 'children'> & {
    handle?: IRouteHandle;
    children?: IRoute[] | undefined;
}
