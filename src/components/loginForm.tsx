import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/user';

interface Props {

}

const loginForm: React.FC = ({ }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()
    const actions = useStore()

    const handleSubmit = async () => {
        await actions.login({ email, password })
        setTimeout(() => navigate("/user", { replace: true }), 1500)

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

export default loginForm
