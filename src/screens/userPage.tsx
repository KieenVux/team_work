import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/user'

export const UserPage = () => {
    const user = useStore();
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/", { replace: false });
    }
    if (!user.isAuthenticated) return navigate("/");
    return (
        <div>
            <h3>Welcome, {user.data.name}</h3>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}
