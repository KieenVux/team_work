import { createContext, useContext, useState } from "react";
import { useAxios } from "../hooks/useAxios";

interface UserContext {
    isAuthenticated: boolean;
    login: (AccountReq: AccountReq) => Promise<void>;
    logOut: () => void;
    signUp: (AccountReq: AccountReq) => Promise<boolean>;
    data: AccountReq;
}

interface AccountReq {
    name?: string;
    email: string;
    password: string;
    role?: string;
    message?: string
    id?: string;
    code?: string;
}



const UserContext = createContext<UserContext>(null!)

export const UserProvider: React.FC = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [status, setStatus] = useState(false)
    const { execute, data, loading } = useAxios<AccountReq>();


    const login = async ({ email, password }: AccountReq) => {
        if (email === 'Sincere@april.biz' && password === '123') {
            await execute('get', 'users', '/1')
            setIsAuthenticated(true);
        }

    }
    const logOut = () => {
        setIsAuthenticated(false);

    }

    const signUp = async ({ name, email, password }: AccountReq) => {
        await execute('post', 'users', '', { name, email, password })
        let status = false;

        //Validation hard code
        if( email.length > 0 || password.length > 0) {
            status = true;
        }

        return status
    }

    const value: UserContext = {
        isAuthenticated,
        login,
        logOut,
        signUp,
        data
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}

export const useStore = () => useContext(UserContext)