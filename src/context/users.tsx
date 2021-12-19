import { createContext, useContext, useState } from "react";
import { useAxios } from "../hooks/useAxios";


export interface AdminRequest {
    message: string;
    code: string;
    data: dataUser[];
}

interface AdminContext {
    data: AdminRequest[];
    getAllUser: () => Promise<void>
}

//type of data in Api
interface dataUser {
    _id: string;
    email: string;
    name: string;
}

const AdminContext = createContext<AdminContext>(null!)
// eslint-disable-next-line react/prop-types
export const AdminProvider: React.FC = ({ children }) => {
    const { execute, data, error } = useAxios<AdminRequest[]>();
    const [dataUser, setDataUser] = useState<dataUser[]>();
    // eslint-disable-next-line no-empty-pattern
    const getAllUser = async () => {
        await execute("get", "account", "/index", [], { withCredentials: true });
    }

    const value: AdminContext = {
        data,
        getAllUser
    }

    return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}

export const useStore2 = () => useContext(AdminContext)