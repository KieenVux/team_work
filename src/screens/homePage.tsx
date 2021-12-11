import React from 'react'
import { IUser } from '../context/user';
import { useAxios } from '../hooks/useAxios'
export const HomePage = () => {

    const { data, error, loading, execute } = useAxios<IUser>();

    const getAllUsers = async () => {
        await execute("get", "users")
    }
    const createUser = () => {
        execute("post", "users", "", { id: "11", name: "Kiet" })
        console.log(data)
    }
    const updateUser = () => {
        execute("patch", "users", "/1", { name: "Kiet" })
        console.log(data)
    }
    const deleteUser = () => {
        execute("delete", "users", "/11")
        console.log(data)
    }

    return (
        <div>
            {loading && !data ? <h1>Please wait a minutes</h1> : <h1>Check</h1>}
            <button onClick={getAllUsers}>Show all users</button>
            <button onClick={createUser}>Create a user</button>
            <button onClick={updateUser}>Update a user</button>
            <button onClick={deleteUser}>Delete a user</button>
        </div>
    )
}
