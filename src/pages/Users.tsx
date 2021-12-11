import React from 'react'
import { Navigate } from 'react-router-dom'
import { useStore } from '../context/user'


function Users() {
    const userInfos = useStore()

    if (!userInfos.isAuthenticated)
        return <Navigate to={"/"} />

    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Welcome: {userInfos.data.name}</h3>
        </div>
    )
}

export default Users
