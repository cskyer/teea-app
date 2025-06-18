import { App } from 'antd'
import type { MessageInstance } from 'antd/es/message/interface'
import type { NotificationInstance } from 'antd/es/notification/interface'
import type { ModalStaticFunctions } from 'antd/es/modal/confirm'

let message: MessageInstance
let notification: NotificationInstance
let modal: Omit<ModalStaticFunctions, 'warn'>

const AppNotification = () => {
    const staticFun = App.useApp()
    message = staticFun.message
    modal = staticFun.modal
    notification = staticFun.notification

    return null
}

// eslint-disable-next-line react-refresh/only-export-components
export { message, modal, notification }
export default AppNotification
