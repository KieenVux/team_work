import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/user';

export const RegisterForm = () => {
    // eslint-disable-next-line no-unused-vars
    const [email, setEmail] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [password, setPassword] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [name, setName] = useState('');
    const action = useStore();
    const navigate = useNavigate();
    const handleRegisterSubmit = async () => {
        // await action.register({ email, password, name });
    }
    return (
        <div>
            <h1>Create a new account</h1>
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
                    <label>Name</label>
                    <input
                        onChange={e => setName(e.target.value)}
                        type='text'
                        placeholder='Enter your name'>
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
            {/* <div className='form-group'>
                <div className='text-field'>
                    <label>Confirm-password</label>
                    <input
                        type='password'
                        placeholder='Please confirm password'>
                    </input>
                </div>
            </div > */}
            <div className='form-group'>
                <div className='btn-register'>
                    <button onClick={handleRegisterSubmit}>Register</button>
                </div>
                <div className='btn-register'>
                    <button onClick={() => {
                        navigate("/", { replace: true })
                    }}>Cancel</button>
                </div>
            </div>
        </div>
    )
}
