import React, { ChangeEvent, useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../Style/loginForm.css'
import { useStore } from '../context/user';
import { useNavigate } from 'react-router-dom';

interface Props {
    switchTab: (key: string) => void;
}

const newLogin: React.FC<Props> = ({ switchTab }: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const actions = useStore()

    const onFinish = async () => {
        await actions.login({ email, password })
        setTimeout(() => navigate("/", { replace: true }), 1200)
    };

    return (
        <div className="card-login-form">
            <h2>Login</h2>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a onClick={() => switchTab('2')} >register now!</a>
                </Form.Item>
            </Form>
        </div>
    )
}

export default newLogin
