import { type FC, memo } from 'react'
import { useRouteLoaderData } from 'react-router-dom'
import AppHeaderActionNotification from '@/components/app-header-action-notification'
import AppHeaderActionUser from '@/components/app-header-action-user'
import type { IUser } from '@/interface'

const AppHeaderAction: FC = () => {
    const userInfo = useRouteLoaderData('app') as IUser

    return (
        <div className="flex gap-x-6 ml-5">
            <AppHeaderActionNotification />
            <AppHeaderActionUser
                username={`${userInfo?.lastName} ${userInfo?.firstName}`}
                email={userInfo?.username}
                avatar={userInfo?.file}
            />
        </div>
    )
}

export default memo(AppHeaderAction)
