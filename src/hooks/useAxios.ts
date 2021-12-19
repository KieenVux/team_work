import { useReducer, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { fetchStatusReducer, FetchState } from "../reducers/FetchStatusReducer";
import { FetchActionType } from "../reducers/typeActions";
// const API_PROJECT = "http://14.225.254.71:8080/api/v1"
const FAKE_API = "https://jsonplaceholder.typicode.com/"
const instance = axios.create({ baseURL: FAKE_API })

const { FETCH_FAILURE, FETCH_INIT, FETCH_SUCCESS } = FetchActionType

interface Controller {
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

interface MethodCall {
    get: string;
    post: string;
    patch: string;
    delete: string;
}

const initDefaultFetchData: FetchState = {
    data: [],
    isLoading: false,
    isError: false
}

export const useAxios = <Type>() => {
    const [fetchApiData, dispatch] = useReducer(fetchStatusReducer, initDefaultFetchData)
    let error = fetchApiData.isError
    let isLoading = fetchApiData.isLoading
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState<unknown>(null);
    // const [data, setData] = useState<Type>(null!);

    const execute = async (
        method: keyof MethodCall,
        controller: keyof Controller,
        prefix = '',
        config?: AxiosRequestConfig<any>,
        data?: Type) => {
        // setLoading(true);
        dispatch({ type: FETCH_INIT })
        try {
            if (method === "get" || method === "delete") {
                const item = await instance[method](controller + prefix, config);
                // setData(item.data);
                dispatch({ type: FETCH_SUCCESS, payload: item.data })
                // setLoading(false);
            }

            if (method === "post" || method === "patch") {
                const item = await instance[method](controller + prefix, data, config);
                // setData(item.data);
                dispatch({ type: FETCH_SUCCESS, payload: item.data })
                // setLoading(false);
            }


        } catch (error) {
            // setError(error);
            dispatch({ type: FETCH_FAILURE })
        }
    };

    return { fetchApiData, error, isLoading, execute }

};