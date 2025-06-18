import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from '@/framework/store'
import AppRoot from '@/framework/app-root'

import '@/css/index.scss'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <AppRoot />
        </Provider>
    </StrictMode>,
)
