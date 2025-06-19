import { redirect, type RouteObject } from 'react-router-dom'

const others: RouteObject[] = [
    {
        id: 'login',
        path: 'login',
        lazy: async () => ({ Component: (await import('@/pages/login/components/main')).default })
    },
    {
        path: 'logout',
        loader: () => redirect('/login')
    },
    {
        path: 'not-found',
        lazy: async () => ({ Component: (await import('@/pages/not-found/components/main')).default }),
    },
    {
        path: '*',
        loader: () => redirect('/not-found')
    }
]

export default others
