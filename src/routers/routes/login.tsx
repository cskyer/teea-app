import { Outlet } from 'react-router-dom'
import type { IRoute } from '@/interface'

const router: IRoute[] = [
    {
        id: 'login',
        path: 'login',
        element: <Outlet />,
        children: [
            {
                index: true,
                lazy: async () => ({ Component: (await import('@/pages/login/components/main')).default })
            }
        ]
    }
]

export default router
