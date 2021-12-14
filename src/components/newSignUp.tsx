import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { Form, Input, Checkbox, Button, } from 'antd';

import '../Style/signUpForm.css'
import 'sweetalert2/src/sweetalert2.scss'

import { useStore } from '../context/user';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};


interface Props {
    // eslint-disable-next-line no-unused-vars
    switchTab: (key: string) => void;
}

const newSignUp: React.FC<Props> = ({ switchTab }: Props) => {
    const [form] = Form.useForm();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const actions = useStore()
    // const navigate = useNavigate()

    const onFinish = async () => {
        const status = await actions.signUp({ name, email, password })
        if (status) {
            Swal.fire(
                `Account has been created`,
                'Login Now',
                'success'
            ).then(() => switchTab('1'))
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }

    };

    return (
        <div className="card-signup-form">
            <h2>Sign Up</h2>
            <Form
                {...formItemLayout}
                style={{ width: '40%'}}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    residence: ['zhejiang', 'hangzhou', 'xihu'],
                    prefix: '86',
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="name"
                    label="Name"
                    tooltip="What do you want others to call you?"
                    rules={[
                        {
                            // required: true,
                            message: 'Please input your nickname!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input value={name} onChange={e => setName(e.target.value)} />
                </Form.Item>

                <Form.Item
                    name="address"
                    label="Address"
                    rules={[
                        {
                            // required: true,
                            message: 'Please input Intro',
                        },
                    ]}
                >
                    <Input.TextArea showCount maxLength={100} />
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div >
    )
}

export default newSignUp
