import { type FC, memo } from 'react'
import { Layout } from 'antd'
import AppHeader from '@/framework/app-header'
import { Outlet } from 'react-router-dom'

const AppLayout: FC = () => {
    return (
        <Layout>
            <AppHeader />
            <Layout.Content>
                <Outlet />
            </Layout.Content>
        </Layout>
    )
}

export default memo(AppLayout)
