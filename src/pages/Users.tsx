import React from 'react'
import { Navigate } from 'react-router-dom'
import { useStore } from '../context/user'


function Users() {
    const userInfor = useStore()

    if (!userInfor.isAuthen)
        return <Navigate to={"/"} />

    return (
        <div>
            <form action=""></form>
            <h2 style={{ textAlign: 'center' }}>Welcome: {userInfor.data.name}</h2>
        </div>
    )
}

export default Users
