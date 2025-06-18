import { type FC, memo } from 'react'
import type { GetProps } from 'antd'
import Icon from '@ant-design/icons'

type CustomIconComponentProps = GetProps<typeof Icon>

const MessageSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none">
            <path d="M2 19.5H22V12V4.5H12H2V12V19.5Z" stroke="white" strokeLinejoin="round"/>
            <path d="M2 4.5L12 12L22 4.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 4.5H2V12" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 12V4.5H12" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const MessageIcon: FC<Partial<CustomIconComponentProps>> = (props) => {
    return (<Icon component={MessageSvg} {...props} />)
}

export default memo(MessageIcon)

