import { type FC, memo } from 'react'
import type { GetProps } from 'antd'
import Icon from '@ant-design/icons'

type CustomIconComponentProps = GetProps<typeof Icon>

const UserSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.6193 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.6193 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z" stroke="white" strokeLinejoin="round"/>
            <path d="M5.01123 19.166C5.18308 16.5603 7.35103 14.5 10.0002 14.5H14.0002C16.6459 14.5 18.8117 16.5548 18.9886 19.1556" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const UserIcon: FC<Partial<CustomIconComponentProps>> = (props) => {
    return (<Icon component={UserSvg} {...props} />)
}

export default memo(UserIcon)

