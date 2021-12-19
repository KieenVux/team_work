import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { useAxios } from "../hooks/useAxios";

//initial UserContext
interface UserContext {
    isAuthenticated: boolean;
    // eslint-disable-next-line no-unused-vars
    login: (AccountReq: AccountRequest) => Promise<void>;
    logout: () => void;
    // eslint-disable-next-line no-unused-vars
    register: (AccountReq: AccountRequest) => Promise<void>;
    // eslint-disable-next-line no-unused-vars
    update: (AccountReq: AccountRequest) => Promise<boolean>;
    data: AccountRequest;
    setData: Dispatch<SetStateAction<AccountRequest>>;
}

//type of data in Api
export interface AccountRequest {
    name?: string;
    email?: string;
    password?: string;
    role?: [string];
    message?: string;
    id?: string;
    code?: string;
}


const UserContext = createContext<UserContext>(null!)

// eslint-disable-next-line react/prop-types
export const UserProvider: React.FC = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [status, setStatus] = useState(false);
    const { execute, data, setData } = useAxios<AccountRequest>();

    const login = async ({ email, password }: AccountRequest) => {
        await execute("post", "auth", "", { email, password }, { withCredentials: true });
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    }

    const register = async ({ email, password, name }: AccountRequest) => {
        await execute('post', 'account', "", { email, password, name, role: ["admin"] });
    }

    // eslint-disable-next-line no-unused-vars
    const update = async ({ email, password, name }: AccountRequest) => {
        setStatus(false);
        // if (email.length === 0 && password.length === 0) {
        //     await execute("patch", "users", "/1", { email, password, name });
        //     setStatus(true);
        // }
        return status;
    }

    const value: UserContext = {
        isAuthenticated,
        login,
        logout,
        register,
        update,
        data,
        setData
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useStore = () => useContext(UserContext)