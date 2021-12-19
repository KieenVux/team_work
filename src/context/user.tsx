import { createContext, useContext, useState } from "react";
import { useAxios } from "../hooks/useAxios";
import { FetchState } from "../reducers/FetchStatusReducer";


interface UserContext {
    isAuthenticated: boolean;
    // eslint-disable-next-line no-unused-vars
    login: (AccountReq: AccountReq) => Promise<void>;
    logOut: () => void;
    // eslint-disable-next-line no-unused-vars
    signUp: (AccountReq: AccountReq) => Promise<boolean>;
    getUsers: () => Promise<void>;
    isLoading: boolean;
    fetchApiData: FetchState;    

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
    const { execute, fetchApiData, isLoading, error } = useAxios<AccountReq>();
    // const [data, setData] = useState()
    // const [data, setData] = useState()



    const login = async ({ email, password }: AccountReq) => {
        // const { execute, data, loading } = useAxios<AccountReq>();

        if (email === 'Sincere@april.biz' && password === '123') {
            await execute('get', 'users', '/1')
            setIsAuthenticated(true); 
        } else {
            await execute('get', 'users', '/hgjdkfhgj')
        }

    }
    const logOut = () => setIsAuthenticated(false);
    

    // eslint-disable-next-line no-unused-vars
    const signUp = async ({name, email, password }: AccountReq) => {
        // const { execute, data, loading } = useAxios<AccountReq>();
        await execute('post', 'users', '', {} ,{ name, email, password })
        let status = false;

        //Validation hard code
        if( email.length > 0 || password.length > 0) {
            status = true;
        }

        return status
    }

    const getUsers = async () => {
        // const { execute, data, loading } = useAxios<AccountReq>();
        // setData(data);
        await execute('get', 'users')
        // setUsers(data)
    }
    

    const value: UserContext = {
        isAuthenticated,
        login,
        logOut,
        getUsers,
        signUp,
        fetchApiData,
        isLoading
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}

export const useStore = () => useContext(UserContext)