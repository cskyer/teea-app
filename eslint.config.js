import js from '@eslint/js'
import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    {ignores: ['dist']},
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended, pluginReact.configs.flat.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                {allowConstantExport: true},
            ],
            '@typescript-eslint/no-explicit-any': 'off',
            // 句尾分号可以省略
            'semi': ['error', 'never'],
            // 使用单引号
            'quotes': ['error', 'single'],
            // 代码使用4个空格的缩进风格
            'indent': ['error', 4, {'SwitchCase': 1}],
            // 关闭拖尾逗号
            'comma-dangle': 'off',
            // 要求使用let或const而不是var
            'no-var': 'error',
            // 禁止未使用过的变量包括全局变量和函数中的最后一个参数必须使用
            'no-unused-vars': [
                'error',
                {
                    'vars': 'all',
                    'args': 'after-used'
                }
            ],
            '@typescript-eslint/no-unused-vars': ['error', {'args': 'none'}],
            // 箭头函数的箭头前后都要有空格
            'arrow-spacing': [2, {'before': true, 'after': true}],
            'array-bracket-spacing': ['error', 'never'],
            'object-curly-spacing': ['error', 'always'],
            // 关闭强制在花括号内使用一致的换行符
            'object-curly-newline': 'off',
            'new-cap': ['error', {'properties': false, 'capIsNew': false}],
            'no-useless-escape': 'off',
            // 可以行尾空白
            'no-trailing-spaces': 'off',
            // 关闭换行符转换
            'linebreak-style': 'off',
            // 禁止使用指定语法
            'no-restricted-syntax': ['error', 'WithStatement'],
            // 关闭语句块之前的空格保持一致
            'space-before-blocks': 0,
            'react/react-in-jsx-scope': 'off',
            'react/no-unknown-property': ['error', {ignore: ['styleName']}],
            // jsx代码使用4个空格的缩进风格
            'react/jsx-indent': ['error', 4],
            // jsx属性使用4个空格的缩进风格
            'react/jsx-indent-props': ['error', 4],
            // 组件内部换行
            'react/jsx-one-expression-per-line': 'off',
            // 组件属性可以传any,array,object
            'react/forbid-prop-types': 'off',
            // 禁止空多行
            'no-multiple-empty-lines': ['error', {max: 1}],
            'no-multi-spaces': ['error', {'ignoreEOLComments': false}],
            'key-spacing': [0, {'beforeColon': false, 'afterColon': true}],
        },
        ignores: [
            'dist',
            'docs',
            'node_modules',
            'plugins',
            'src/css/fonts',
            'tailwind.config.js'
        ]
    },
)
