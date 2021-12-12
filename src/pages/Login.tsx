import React, { useState } from "react"
import { Link, useNavigate, useRoutes } from "react-router-dom";
import LoginForm from "../components/loginForm";
import { useStore } from "../context/user";
import SkeletonLogin from "../skeleton/skeletonLogin";


const Login: React.FC = ({ }) => {

    const navigate = useNavigate()

    const data = useStore()


    return (
        <div>
            {!data.isAuthenticated ? <LoginForm /> : <SkeletonLogin />}
        </div>
    )
}

export default Login