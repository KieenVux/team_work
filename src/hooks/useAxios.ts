import { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

const API_PROJECT = "http://14.225.254.71:8080/api/v1"
const FAKE_API = "https://jsonplaceholder.typicode.com/"

const instance = axios.create({ baseURL: FAKE_API })

type Controller = {
    //FAKE_API
    users: string;
    todos: string;
    posts: string;

    //API_PROJECT
    auth: string;
    account: string;
}

// type Controller = {
//     auth: string;
//     account: string;
// }

type MethodCall = {
    get: string;
    post: string;
    patch: string;
    delete: string;
}

export const useAxios = <Type>() => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);
    const [data, setData] = useState<Type>(null!);

    const execute = async (
        method: keyof MethodCall,
        controller: keyof Controller,
        prefix = '',
        data?: Type,
        config?: AxiosRequestConfig<any>) => {
        setLoading(true);
        try {
            if (method === "get" || method === "delete") {
                const item = await instance[method](controller + prefix, config);
                setData(item.data);                
                setLoading(false);
            }
            
            if (method === "post" || method === "patch") {
                const item = await instance[method](controller + prefix, data, config);
                setData(item.data);
                setLoading(false);
            }


        } catch (error) {
            setError(error);
        }
    };

    return { data, error, loading, execute, setData }

};