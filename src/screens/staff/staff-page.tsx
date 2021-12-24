import { Outlet, useNavigate } from 'react-router-dom'
import LogoutSubmit from '../../components/button-logout';

export const StaffPage = () => {
    const navigate = useNavigate();
    const handleUpdateProduct = () => {
        navigate("/staff/update-products");
    }
    const handleUploadProduct = () => {
        navigate("/staff/upload-products");
    }
    return (
        <div>
            <h1>Welcome, Sale</h1>
            <LogoutSubmit />
            <button onClick={handleUpdateProduct}>Update</button>
            <button onClick={handleUploadProduct}>Upload</button>
            <Outlet />
        </div>
    )
}
