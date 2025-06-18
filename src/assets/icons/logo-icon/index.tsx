import { type FC, memo } from 'react'
import type { GetProps } from 'antd'
import Icon from '@ant-design/icons'

type CustomIconComponentProps = GetProps<typeof Icon>

const LogoSvg = () => {
    return (
        'TEEA'
    )
}

const LogoIcon: FC<Partial<CustomIconComponentProps>> = (props) => {
    return (<Icon component={LogoSvg} {...props} />)
}

export default memo(LogoIcon)

