import { FetchActionType } from "./typeActions";


const { FETCH_FAILURE, FETCH_SUCCESS, FETCH_INIT } = FetchActionType

type FetchStatusAction = 
|{
    type: typeof FETCH_INIT;
} |
{
    type: typeof FETCH_SUCCESS;
    payload: any[];
} |
{
    type: typeof FETCH_FAILURE;
}

export interface FetchState {
    data: any[],
    isLoading: boolean,
    isError: boolean
}


export const fetchStatusReducer = (state: any, action: FetchStatusAction) => {
    switch (action.type) {
        case FETCH_INIT:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            throw new Error()
    }

}