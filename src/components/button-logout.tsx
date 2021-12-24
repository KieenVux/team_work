import { useNavigate } from 'react-router-dom';

const LogoutSubmit = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/", { replace: true });
    }
    return (
        <button onClick={handleLogout}>Logout</button>
    )
}

export default LogoutSubmit
