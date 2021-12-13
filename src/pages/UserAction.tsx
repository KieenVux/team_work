import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
function UserAction() {
    const navigate = useNavigate()

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>User Actions</h1>
            <div className="d-grid gap-2 col-12 mx-auto">
                <button onClick={() => navigate("/login")} className="btn btn-warning" type="button">Login</button>
                <button onClick={() => navigate("/signup")} className="btn  btn-danger btnMy" type="button">SignUp</button>
            </div>
            <Outlet />
        </div>
    )
}

export default UserAction
