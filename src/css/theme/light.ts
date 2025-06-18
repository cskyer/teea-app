import antRest from '@/css/theme/reset'
import type { ConfigProviderProps } from 'antd'

const { token = {} } = antRest!

const light: ConfigProviderProps['theme'] = {
    token: {
        ...token,
        colorPrimary: '#e69c37'
    }
}

export default light
