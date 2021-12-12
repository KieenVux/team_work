import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useStore } from '../context/user'
import 'sweetalert2/src/sweetalert2.scss'


function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const actions = useStore()
    const navigate = useNavigate()



    const handleSignUp = async () => {
        const status = await actions.signUp({ name, email, password })           
        if (status) {
            Swal.fire(
                `Account has been created`,
                'Login Now',
                'success'
            ).then(() => navigate("/login"))
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
        
    }


    return (
        <div>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>Full name</label>
                <input value={name}
                    onChange={e => setName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Full name" />
            </div>

            {/* <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" />
            </div> */}

            <div className="form-group">
                <label>Email address</label>
                <input value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email" className="form-control"
                    placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    placeholder="Enter password" />
            </div>

            <button onClick={handleSignUp}
                type="submit"
                className="btn btn-danger btn-block btnSignUp">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <Link to="/login">sign in?</Link>
            </p>
        </div>
    )
}

export default SignUp