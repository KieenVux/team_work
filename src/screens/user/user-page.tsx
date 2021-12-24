import { Outlet } from 'react-router-dom';
import LogoutSubmit from '../../components/button-logout';

export const UserPage = () => {
    return (
        <div>
            <h1>Welcome, User</h1>
            <LogoutSubmit />
            <Outlet />
        </div>
    )
}
