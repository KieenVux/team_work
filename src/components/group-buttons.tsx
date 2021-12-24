import { useNavigate } from 'react-router-dom'

function GroupButton() {
    const navigate = useNavigate();
    const handleLoginWithUser = () => {
        navigate("/user", { replace: true });
    }
    const handleLoginWithSale = () => {
        navigate("/sale", { replace: true });
    }
    const handleLoginWithAdmin = () => {
        navigate("/admin", { replace: true });
    }
    return (
        <div>
            <button onClick={handleLoginWithUser}>LoginWithUser</button>
            <button onClick={handleLoginWithSale}>LoginWithSale</button>
            <button onClick={handleLoginWithAdmin}>LoginWithAdmin</button>
        </div>
    )
}

export default GroupButton
