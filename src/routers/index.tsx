import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import rootRouter, { appRouter } from '@/routers/routes'

const router = createBrowserRouter(
    rootRouter as RouteObject[],
    {
        basename: '/'
    }
)

export { appRouter }

export default router
