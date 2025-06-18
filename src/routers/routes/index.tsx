import { Outlet, redirect } from 'react-router-dom'
import { appLoader } from '@/routers/loaders'
import type { IRoute } from '@/interface'
import AppLoading from '@/framework/app-loading'

export const appRouter: IRoute[] = [

]

const rootRouter: IRoute[] = [
    {
        id: 'root',
        path: '/',
        element: <Outlet />,
        hydrateFallbackElement: <AppLoading />,
        children: [
            {
                id: 'app',
                path: 'app',
                loader: appLoader,
                lazy: async () => ({ Component: (await import('@/framework/app-layout')).default }),
                children: [

                ]
            },
            {
                path: 'logout',
                loader: () => redirect('/login')
            }
        ]
    }
]

export default rootRouter
