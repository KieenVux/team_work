import { Outlet, useNavigate } from 'react-router-dom';
import { IUser } from '../context/user';
import { useAxios } from '../hooks/useAxios'
import { useCRUD } from '../hooks/useCRUD.api';
import { Loading } from '../features/loading';
import { LoginPage } from './loginPage';
export const HomePage = () => {
    const { data, loading } = useAxios<IUser>();
    const { createUser, deleteUser, getAllUsers, updateUser } = useCRUD();
    const negative = useNavigate();
    return (
        <div>
            <h1>Home Page</h1>
            <div>
                {!loading && data ? < Loading /> : <h2>Check console to see your data</h2>}
                <button onClick={getAllUsers}>Show all users</button>
                <button onClick={createUser}>Create a user</button>
                <button onClick={updateUser}>Update a user</button>
                <button onClick={deleteUser}>Delete a user</button>
                <hr />
            </div>
            <div>
                <h1>Another function</h1>
                <button onClick={() => negative("/login")}>Login</button>
                <button onClick={() => negative("/signUp")}>Sign Up</button>
                <button onClick={() => negative("/update")}>Update Profile</button>
            </div>
        </div>
    )
}
