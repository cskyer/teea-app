import { type FC, memo } from 'react'
import { Spin } from 'antd'

const AppLoading: FC = () => {
    return (
        <Spin spinning />
    )
}

export default memo(AppLoading)
