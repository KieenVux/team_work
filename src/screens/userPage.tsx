import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/user'

export const UserPage = () => {
    const user = useStore();
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/", { replace: false });
        user.isAuthenticated = false;
    }
    const handleBack = () => {
        navigate("/login", { replace: true })
    }
    return (
        <div>
            {user.isAuthenticated ? <h3>Welcome, {user.data.name}</h3> : <h3>This account is not authenticated!</h3>}
            {user.isAuthenticated ? <button onClick={handleLogout}>Logout</button> : <button onClick={handleLogout}>Back to login</button>}
        </div>
    )
}
