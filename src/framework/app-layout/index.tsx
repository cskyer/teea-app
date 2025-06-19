import { type FC, memo, useEffect } from 'react'
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import { Layout } from 'antd'
import AppHeader from '@/framework/app-header'
import AppSider from '@/framework/app-sider'

const AppLayout: FC = () => {
    const checkedLogin = useLoaderData<boolean>()
    const navigate = useNavigate()

    useEffect(() => {
        if (!checkedLogin) navigate('/login', { replace: true })
    }, [checkedLogin, navigate])

    return (
        <Layout className="h-screen">
            <AppHeader />
            <Layout hasSider>
                <AppSider />
                <Layout.Content>
                    <Outlet />
                </Layout.Content>
            </Layout>
        </Layout>
    )
}

export default memo(AppLayout)
