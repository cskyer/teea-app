import { type FC, memo, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Dropdown, Avatar, type MenuProps } from 'antd'
import { useAppDispatch } from '@/hooks'
import { logoutAction } from '@/action'
import { clearStorage } from '@/helper'
import UserIcon from '@/assets/icons/user-icon'
import SettingIcon from '@/assets/icons/setting-icon'
import ExitIcon from '@/assets/icons/exit-icon'
import UserBgIcon from '@/assets/icons/user-bg-icon'

interface AppHeaderActionUserProps {
    username: string;
    email: string;
    avatar?: string;
}

const AppHeaderActionUser: FC<AppHeaderActionUserProps> = ({
    username,
    email,
    avatar
}) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const logout = useCallback(async () => {
        try {
            const params = { username: email }
            await dispatch(logoutAction({ params })).unwrap()
            navigate('/login')
            await clearStorage()
        } catch (e) {
            console.error(e)
        }
    }, [email, dispatch, navigate])

    const menuItems: MenuProps['items'] = useMemo(() => ([
        {
            label: (
                <>
                    <p className="text-base text-[#333] font-bold">{username}</p>
                    <p>{email}</p>
                </>
            ),
            key: 'username',
            disabled: true,
            icon: <UserBgIcon className="!text-[40px]" />
        },
        {
            type: 'divider'
        },
        {
            label: <span className="text-base">{t('global.header.settings')}</span>,
            key: 'settings',
            icon: <SettingIcon className="!text-base" />
        },
        {
            label:  <span className="text-base">{t('global.header.logout')}</span>,
            key: 'logout',
            icon: <ExitIcon className="!text-base" />
        }
    ]), [t, username, email])

    const handleClick: MenuProps['onClick'] = useCallback(({ key }: { key: string }) => {
        switch (key) {
            case 'settings':
                navigate('/app/profile')
                break
            case 'logout':
                void logout()
                break
            default:
                throw new Error(`未知的KEY: ${key}`)
        }
    }, [logout, navigate])

    return (
        <Dropdown menu={{ items: menuItems, onClick: handleClick }} placement="bottomRight">
            <div className="flex items-center justify-center h-16">
                <Avatar size="large" src={avatar||null} icon={<UserIcon />} alt={email} />
            </div>
        </Dropdown>
    )
}

export default memo(AppHeaderActionUser)
