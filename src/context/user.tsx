import { createContext, useContext, useState } from "react";
import { useAxios } from "../hooks/useAxios";

interface UserContext {
    isAuthenticated: boolean;
    // eslint-disable-next-line no-unused-vars
    login: (AccountReq: AccountReq) => Promise<void>;
    logOut: () => void;
    // eslint-disable-next-line no-unused-vars
    signUp: (AccountReq: AccountReq) => Promise<boolean>;
    getUsers: () => Promise<void>;
    loading: boolean;
    data: AccountReq[];    

    users: AccountReq[];
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

// eslint-disable-next-line react/prop-types
export const UserProvider: React.FC = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const { execute, data, loading } = useAxios<AccountReq[]>();

    const [users, setUsers] = useState<AccountReq[]>(null!)


    const login = async ({ email, password }: AccountReq) => {
        if (email === 'Sincere@april.biz' && password === '123') {
            await execute('get', 'users', '/1')
            setIsAuthenticated(true);
        }

    }
    const logOut = () => {
        setIsAuthenticated(false);

    }

    // eslint-disable-next-line no-unused-vars
    const signUp = async ({ name, email, password }: AccountReq) => {
        // await execute('post', 'users', '', { name, email, password })
        let status = false;

        //Validation hard code
        if( email.length > 0 || password.length > 0) {
            status = true;
        }

        return status
    }

    const getUsers = async () => {
        await execute('get', 'users')
        setUsers(data)
    }
    

    const value: UserContext = {
        isAuthenticated,
        users,
        login,
        logOut,
        getUsers,
        signUp,
        loading,
        data,
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}

export const useStore = () => useContext(UserContext)