import { type FC, memo } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import AppHeader from '@/framework/app-header'
import AppSider from '@/framework/app-sider'

const AppLayout: FC = () => {
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
