import { createContext, useContext, useState } from "react";
import { useAxios } from "../hooks/useAxios";

//initial UserContext
interface UserContext {
    isAuthenticated: boolean;
    login: (AccountReq: AccountRequest) => Promise<void>;
    data: AccountRequest
}

//type of data in Api
interface AccountRequest {
    name?: string;
    email: string;
    password: string;
    role?: string;
    message?: string
    id?: string;
    code?: string;
}

export interface IUser {
    id?: string,
    name?: string
}

const UserContext = createContext<UserContext>(null!)

export const UserProvider: React.FC = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [status, setStatus] = useState(false)
    const { execute, data } = useAxios<AccountRequest>();


    const login = async ({ email, password }: AccountRequest) => {
        if (email === 'Sincere@april.biz' && password === '123') {
            await execute('get', 'users', '/1')
            setIsAuthenticated(true);
        }
    }

    const value: UserContext = {
        isAuthenticated,
        login,
        data
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}

export const useStore = () => useContext(UserContext)