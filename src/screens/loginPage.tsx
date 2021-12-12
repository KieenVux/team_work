import React from 'react'
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/loginForm'
import { useStore } from '../context/user'
import { Loading } from '../features/loading';

export const LoginPage = () => {
    const user = useStore();
    const navigate = useNavigate();
    return (
        <div>
            {!user.isAuthenticated ? <LoginForm /> : <Loading />}
        </div>
    )
}
