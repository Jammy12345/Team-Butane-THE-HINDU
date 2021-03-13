import axios from "axios"
import { checkLogin, postSignup } from "../../Utils/util"
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../News/ActionTypes"
import { LOGIN_FAILURE, LOGOUT, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionTypes"

const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}
const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}
const loginFailure = () => {
    return {
        type: LOGIN_FAILURE
    }
}
const SignupRequest = () => {
    return {
        type: SIGNUP_REQUEST
    }
}
const SignupSuccess = () => {
    return {
        type: SIGNUP_SUCCESS
    }
}
const SignupFailure = () => {
    return {
        type: SIGNUP_FAILURE
    }
}
const logout = () => {
    return {
        type: LOGOUT
    }
}
const loginUser = (payload) => (dispatch) => {
    // console.log(payload.password);
    dispatch(loginRequest());
    return checkLogin(payload.email)
        .then((res) => {
            res.data.length === 0 ? window.alert("You are not Registered User! SignUp NOW!") : res.data[0].password !== payload.password ? window.alert("Entered Wrong Password!") : dispatch(loginSuccess(res.data[0])) 
        })
    .catch(() => dispatch(loginFailure()))
} 

const signupUser = (payload) => (dispatch) => {
    dispatch(SignupRequest())
    return postSignup(payload)
        .then((res) => {
            dispatch(SignupSuccess())
            return res.status
        })
    .catch(() => dispatch(SignupFailure()))
}
export { loginUser, signupUser, logout };