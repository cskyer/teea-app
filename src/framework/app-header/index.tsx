import { Layout } from 'antd'
import { type FC, memo } from 'react'
import AppHeaderLogo from '@/components/app-header-logo'
import AppHeaderMenu from '@/components/app-header-menu'
import AppHeaderAction from '@/components/app-header-action'

const AppHeader: FC = () => {
    return (
        <Layout.Header className="sticky top-0 flex items-center justify-between px-16 w-full h-15 leading-none z-10">
            <AppHeaderLogo />
            <AppHeaderMenu />
            <AppHeaderAction />
        </Layout.Header>
    )
}

export default memo(AppHeader)
