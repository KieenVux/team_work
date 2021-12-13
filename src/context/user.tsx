import { ChangeEvent, createContext, useContext, useState } from "react";
import { useAxios } from "../hooks/useAxios";

//initial UserContext
interface UserContext {
    isAuthenticated: boolean;
    login: (AccountReq: AccountRequest) => Promise<void>;
    logout: () => void;
    register: (AccountReq: AccountRequest) => Promise<boolean>;
    update: (AccountReq: AccountRequest) => Promise<boolean>;
    data: AccountRequest;
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
        const users = await [execute("get", "users")]
        if (email === 'kietna@123' && password === '123') {
            await execute('get', 'users', '/1')
            setIsAuthenticated(true);
        }
    }

    const logout = async () => {
        setIsAuthenticated(false)
    }

    const register = async ({ email, password, name }: AccountRequest) => {
        await execute("get", "users", "/1");
        let status = false;
        await execute("post", "users", "", { email, password, name })
        if (email.length > 0 && password.length > 0) {
            status = true;
        }
        return status;
    }

    const update = async ({ email, password, name }: AccountRequest) => {
        setStatus: false
        if (email.length === 0 && password.length === 0) {
            await execute("patch", "users", "/1", { email, password, name });
            setStatus: true
        }
        return status;
    }

    const value: UserContext = {
        isAuthenticated,
        login,
        logout,
        register,
        update,
        data
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useStore = () => useContext(UserContext)