import React from 'react'
import './../features/input.css'
export const LoginForm = () => {
    return (
        <div>
            <div className='form-group'>
                <div className='text-field'>
                    <label>Email</label>
                    <input></input>
                </div>
            </div >
            <div className='form-group'>
                <div className='text-field'>
                    <label>Password</label>
                    <input></input>
                </div>
            </div >
            <div className='form-group'>
                <button>Login</button>
            </div>

        </div >
    )
}

export default LoginForm