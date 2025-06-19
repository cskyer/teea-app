import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@fonts': resolve(__dirname, 'src/assets/fonts')
        },
    },
    plugins: [
        react()
    ],
})
