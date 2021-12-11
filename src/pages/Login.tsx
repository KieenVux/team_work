import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useStore } from "../context/user";
import { useAxios } from "../hooks/useAxios";

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
    // const { excute, data, error, setData } = useAxios<LoginReq>();

    const handleSubmit = () => {
        actions.login({email, password})
        navigate("/user", {replace: true})
    }
    // console.log('Error: ', error);
    // console.log('Data:', actions.data);

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
                Do not have an account? <a href="#">SignUp Now</a>
            </p>

        </div>
    )
}

export default Login