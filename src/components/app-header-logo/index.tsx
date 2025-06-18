import { type FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoIcon from '@/assets/icons/logo-icon'
import classNames from 'classnames'

interface AppHeaderLogoProps {
    toHome?: boolean
}

const AppHeaderLogo: FC<AppHeaderLogoProps> = ({
    toHome = true
}) => {
    const navigate = useNavigate()

    const goHome = useCallback(() => {
        if (toHome) navigate('/app/home')
    }, [toHome])

    return (
        <div className={classNames('ml-10', { 'cursor-pointer': toHome })} onClick={goHome}>
            <LogoIcon />
        </div>
    )
}

export default memo(AppHeaderLogo)
