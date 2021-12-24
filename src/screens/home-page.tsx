import { Outlet, useNavigate } from "react-router-dom"
import GroupButton from "../components/group-buttons"

export const HomePage = () => {
    const navigate = useNavigate();
    const handleLoginForm = () => {
        navigate("/login", { replace: true })
    }
    const handleSignUpForm = () => {
        navigate("/sign-up", { replace: true })
    }
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleLoginForm}>Login Page</button>
            <button onClick={handleSignUpForm}>Sign Up Page</button>
            <GroupButton />
            <Outlet />
        </div>
    )
}
