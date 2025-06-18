import { type FC, useMemo } from 'react'
import { RouterProvider } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { App as AntApp, ConfigProvider, type ConfigProviderProps, theme as antTheme } from 'antd'
import { StyleProvider, px2remTransformer } from '@ant-design/cssinjs'
import AppNotification from '@/framework/app-notification'
import light from '@/css/theme/light'
// import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import i18n from '@/language'
import routers from '@/routers'

const AppRoot: FC = () => {
    const theme: ConfigProviderProps['theme'] = useMemo(() => ({
        algorithm: [antTheme.defaultAlgorithm],
        ...light,
        cssVar: { prefix: 'teea' }
    }), [])

    return (
        <ConfigProvider locale={zhCN} theme={theme}>
            <StyleProvider transformers={[px2remTransformer({ rootValue: 16 })]}>
                <I18nextProvider i18n={i18n}>
                    <AntApp>
                        <AppNotification />
                        <RouterProvider router={routers} />
                    </AntApp>
                </I18nextProvider>
            </StyleProvider>
        </ConfigProvider>
    )
}

export default AppRoot
