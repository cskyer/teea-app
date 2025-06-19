import { type FC, memo } from 'react'

import styles from './scss/index.module.scss'
import classNames from 'classnames'

const Login: FC = () => {
    return (
        <div className="flex h-screen w-screen">
            <div className={classNames([styles.leftPanel, 'mr-4 hidden min-h-full pl-4 xl:w-8/12 xl:flex xl:flex-col bg-cover'])} />
            <div className="h-full w-full flex flex-col py-5 xl:my-0 xl:h-auto xl:w-4/12 xl:py-0">123</div>
        </div>
    )
}

export default memo(Login)
