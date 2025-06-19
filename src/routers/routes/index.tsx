import { Outlet } from 'react-router-dom'
import { appLoader } from '@/routers/loaders'
import AppLoading from '@/framework/app-loading'
import others from '@/routers/routes/others'
import type { IRoute } from '@/interface'

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
            ...others
        ]
    }
]

export default rootRouter
