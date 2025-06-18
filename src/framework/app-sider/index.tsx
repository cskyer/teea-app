import { type FC, memo } from 'react'
import { Layout, theme } from 'antd'

const AppSider: FC = () => {
    const { token: { colorBgContainer } } = theme.useToken()

    return (
        <Layout.Sider width={200} style={{ background: colorBgContainer }}>
            sider
        </Layout.Sider>
    )
}

export default memo(AppSider)
