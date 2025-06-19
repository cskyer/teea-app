import { type FC, memo, useCallback, useEffect, useRef } from 'react'
import { Form, Input, Radio, Flex, Button, type InputRef, type FormProps } from 'antd'
import CustomIcon from '@/components/custom-icon'

interface LoginParams {
  username: string;
  password: string;
  userType: 'user' | 'admin';
}

const LoginPanel: FC = () => {
    const usernameRef = useRef<InputRef>(null)
    const handleSignIn: FormProps<LoginParams>['onFinish'] = useCallback(async (data: LoginParams) => {
        console.log(data)
    }, [])

    const onFinishFailed: FormProps<LoginParams>['onFinishFailed'] = useCallback((errorInfo: any) => {
        console.error('Failed:', errorInfo)
    }, [])

    useEffect(() => {
        usernameRef.current?.focus()
    }, [])

    return (
        <Form
            name="login-form"
            className="login-form"
            initialValues={{ username: '', password: '', userType: 'user' }}
            onFinish={handleSignIn}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <h2 className="text-center mb-10 text-2xl select-none">百秋客服</h2>
            <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input ref={usernameRef} placeholder="Username" prefix={<CustomIcon icon="icon-yonghuming" />} />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password prefix={<CustomIcon icon="icon-password" />} placeholder="Password" />
            </Form.Item>
            <Form.Item className="mb-3">
                <Flex justify="space-between" align="center">
                    <Form.Item name="userType" className="mb-0">
                        <Radio.Group>
                            <Radio value="user">用户</Radio>
                            <Radio value="admin">管理员</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Button type="link" className="px-0">忘记密码？</Button>
                </Flex>
            </Form.Item>
            <Form.Item className="mb-0">
                <Button type="primary" htmlType="submit" className="w-full">登录</Button>
            </Form.Item>
        </Form>
    )
}

export default memo(LoginPanel)
