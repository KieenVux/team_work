import React, { useState } from "react"
import { Link, useNavigate, useRoutes } from "react-router-dom";
import { useStore } from "../context/user";

interface LoginReq {
    id?: string;
    email: string;
    password?: string;
    name?: string;
}

const Login: React.FC = ({ }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const actions = useStore()
    const navigate = useNavigate()
    
    const handleSubmit = async () => {
        await actions.login({ email, password })
        navigate("/user", { replace: true })
    }


    return (
        <div>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    className="form-control"
                    placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-warning btn-block btnLogin">Submit
            </button>
            <p className="forgot-password text-right">
                Do not have an account? <Link to="/signup">SignUp Now</Link>
                
            </p>

        </div>
    )
}

export default Login