import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/user';
import { useStore2 } from '../context/users';
import { useCookies } from 'react-cookie';
import React, { useEffect } from 'react';
import axios from 'axios';

export const UserPage = () => {
    const user = useStore();
    const admin = useStore2();
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [cookies, removeCookie] = useCookies();
    // useEffect(() => {
    //     console.log("456");
    //     admin.getAllUser();
    //     console.log("123");
    // }, [])

    // useEffect(() => {
    //     execute("get", "account", "")
    // }, [])

    const handleLogout = () => {
        user.logout();
        navigate("/", { replace: true });
        removeCookie('auth-token', "");
    }

    const showAll = async () => {
        await admin.getAllUser();
        // console.log("1: ", admin.data);
        // console.log("admin: ", admin.data['data'].map((value) => console.log(value['data'].name)));
        // console.log("user ", user);
    }

    return (
        <div>
            <h3>{user.isAuthenticated ? <h3> Welcome, {user.data.name} </h3> : <h3>No data to show</h3>}</h3>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={showAll}>Get All</button>
            <table>
                <tr>
                    <td>This is new td</td>
                    <td>This is new td</td>
                    <td>This is new td</td>
                </tr>
                {admin.data && admin.data.data ? admin.data.data.map((user, index) => {
                    return (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.role}</td>
                            <td>{user.email}</td>
                        </tr>);
                }) : <h3>No data</h3>}
            </table>
            {/* {admin.data ? admin.data.map((user, index) => {
                    <li key={index}>{user.name}</li>
                }) : <h3>No data</h3>} */}
        </div>
    )
}
