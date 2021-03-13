import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../News/ActionTypes";
import { LOGIN_FAILURE, LOGOUT, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionTypes";

const initState = {
    email: "",
    username: "",
    isAuth: false,
    isLoading: false,
    isError: false
}

const AuthReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST: 
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                email: payload.email,
                username: payload.username,
                isAuth: true,
                isLoading: false,
                isError: false
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isError: true,
                isLoading: false,
                isAuth: false,
                email: "",
                username: ""
            }
        case SIGNUP_REQUEST: 
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case SIGNUP_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                isError: false  
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case LOGOUT: 
            return {
                ...state,
                email: "",
                username: "",
                isAuth: false
            }
        default: return state;
    }    
}
export { AuthReducer };