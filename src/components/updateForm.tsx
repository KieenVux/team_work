import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/user';

export const UpdateForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const action = useStore();
    const navigate = useNavigate();

    const handleUpdateSubmit = async () => {
        const updateData = await action.update({ email, password, name });
        if (updateData) {
            navigate("/update", { replace: true })
            setEmail('');
            setPassword('')
            setName('')
            alert("Cannot update this profile!!!")
        } else {
            navigate("/", { replace: true })
            await alert("Update " + `${action.data.name}` + " successfully!")
        }
    }

    return (
        <div>
            <h1>Update Profile</h1>
            <div className='form-group'>
                <div className='text-field'>
                    <label>New Email</label>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        type='email'
                        placeholder='Enter your email'>
                    </input>
                </div>
            </div >
            <div className='form-group'>
                <div className='text-field'>
                    <label>New Name</label>
                    <input
                        onChange={e => setName(e.target.value)}
                        type='text'
                        placeholder='Enter your name'>
                    </input>
                </div>
            </div >
            <div className='form-group'>
                <div className='text-field'>
                    <label>New Password</label>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                        placeholder='Enter your password'>
                    </input>
                </div>
            </div >
            <div className='form-group'>
                <div className='btn-register'>
                    <button onClick={handleUpdateSubmit}>Update</button>
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
