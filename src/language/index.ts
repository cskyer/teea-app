import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enUS from '@/language/resources/en-US'
import zhCN from '@/language/resources/zh-CN'

void i18n.use(initReactI18next).init({
    resources: {
        'en-US': { translation: enUS },
        'zn-CN': { translation: zhCN }
    },
    debug: false,
    fallbackLng: 'zh-CN',
    interpolation: {
        escapeValue: false
    }
})

export default i18n
