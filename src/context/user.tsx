import { createContext, useContext, useState } from "react";
import { useAxios } from "../hooks/useAxios";

interface UserContext {
    isAuthen: boolean;
    login: (LoginReq: LoginReq) => void;
    logout: () => void;
    data: LoginReq
}

interface LoginReq {
    id?: string;
    email: string;
    password?: string;
    name?: string;
}

const UserContext = createContext<UserContext>(null!)

export const UserProvider: React.FC = ({ children }) => {
    const [isAuthen, setIsAuthen] = useState(false)
    const { excute, data } = useAxios<LoginReq>();


    const login = async ({ email, password }: LoginReq) => {
        if (email === 'Sincere@april.biz' && password === '123') {
            await excute('get', 'users', '/1')
            setIsAuthen(true);
        }
        console.log("Data:", data);
        console.log("isAuthen:", isAuthen);

    }
    const logout = () => {
        setIsAuthen(false);

    }

    const value: UserContext = {
        isAuthen,
        login,
        logout,
        data
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}

export const useStore = () => useContext(UserContext)