import { type FC, memo, useCallback, useMemo, useState } from 'react'
import { Badge, Divider, Popover } from 'antd'
import MessageIcon from '@/assets/icons/message-icon'

const AppHeaderActionNotification: FC = () => {
    const [
        count,
        // setCount
    ] = useState(10)
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenChange = useCallback((newOpen: boolean) => {
        if (count > 0) setIsOpen(newOpen)
    }, [count, setIsOpen])

    const handleClick = useCallback(() => {
        console.log('handleClick')
    }, [])

    const title = useMemo(() => {
        return (
            <div className="h-12 leading-[48px]">
                <div className="px-5">Message</div>
                <Divider className="m-0" />
            </div>
        )
    }, [])

    const content = useMemo(() => (
        <div className="max-w-[400px]">
            <div className="px-5 max-h-[400px] overflow-auto">
                <div className="mt-6">
                    <p onClick={handleClick}>Content</p>
                    <p>Content</p>
                </div>
            </div>
            <div className="h-12 leading-[48px]">
                <Divider className="m-0" />
                <div className="px-5 text-right">Mark all as read</div>
            </div>
        </div>
    ), [handleClick])

    return (
        <Popover
            arrow={false}
            title={title}
            content={content}
            placement="bottomRight"
            trigger="click"
            open={isOpen}
            onOpenChange={handleOpenChange}
            rootClassName="custom-popover"
        >
            <div className="flex items-center justify-center cursor-pointer">
                <Badge
                    count={count}
                    size="small"
                    offset={[2, 3]}
                    style={{ background: '#fd2c4e', paddingInline: 6 }}
                >
                    <MessageIcon className="text-2xl" />
                </Badge>
            </div>
        </Popover>
    )
}

export default memo(AppHeaderActionNotification)
