import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/user';
import './../features/input.css'
export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const action = useStore();
    const handleLoginSubmit = async () => {
        await action.login({ email, password })
        setTimeout(() => navigate("/user", { replace: true }), 3000)
        console.log(action.data)
    }
    return (
        <div>
            <h1>Login</h1>
            <div className='form-group'>
                <div className='text-field'>
                    <label>Email</label>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        type='email'
                        placeholder='Enter your email'>
                    </input>
                </div>
            </div >
            <div className='form-group'>
                <div className='text-field'>
                    <label>Password</label>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                        placeholder='Enter your password'>
                    </input>
                </div>
            </div >
            <div className='form-group'>
                <button onClick={handleLoginSubmit}>Login</button>
            </div>
        </div >
    )
}

export default LoginForm