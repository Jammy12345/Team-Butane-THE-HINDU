import { fetchnews, fetchSingleNews, postNews } from "../../Utils/util"
import { FETCH_NEWS_DATA, FETCH_NEWS_FAILURE, FETCH_NEWS_SUCCESS, FETCH_SINGLE_DATA, FETCH_SINGLE_FAILURE, FETCH_SINGLE_SUCCESS, LOGIN_REQUEST,LOGIN_FAIL,LOGIN_SUCCESS, POST_NEWS_DATA, POST_NEWS_SUCCESS, POST_BOOK_DATA, POST_BOOK_SUCCESS, POST_BOOK_FAILURE } from "./ActionTypes"
import axios from "axios"



const fetchNewsRequest = () => {
    return {
        type: FETCH_NEWS_DATA
    }
}

const fetchNewsSuccess = (payload) => {
    return {
        type : FETCH_NEWS_SUCCESS,
        payload 
    }
}

const fetchNewsFailure = () => {
    return {
        type : FETCH_NEWS_FAILURE,
    }
}

const fetchSingleRequest = () => {
    return {
        type: FETCH_SINGLE_DATA
    }
}

const fetchSingleSuccess = (payload) => {
    console.log("working")
    return {
        type : FETCH_SINGLE_SUCCESS,
        payload 
    }
}

const fetchSingleFailure = () => {
    console.log("working")
    return {
        type : FETCH_SINGLE_FAILURE,
    }
}

const loginrequest=()=>{
    return{
        type:LOGIN_REQUEST,
        // payload
    }
}

const loginsuccess=(payload)=>{
    return {
        type:LOGIN_SUCCESS,
        payload
    }
}

const loginfail=()=>{
    return {
        type:LOGIN_FAIL
    }
}

const postNewsRequest = () => {
    return {
        type: POST_NEWS_DATA
    }
}

const postNewsSuccess = (payload) => {
    return {
        type : POST_NEWS_SUCCESS,
        payload 
    }
}

const postNewsFailure = () => {
    return {
        type : POST_NEWS_SUCCESS,
    }
}

const postBookRequest = () => {
    return {
        type: POST_BOOK_DATA
    }
}

const postBookSuccess = (payload) => {
    return {
        type : POST_BOOK_SUCCESS,
        payload 
    }
}

const postBookFailure = () => {
    return {
        type : POST_BOOK_FAILURE,
    }
}




export const fetchData = () => (dispatch) => {
    dispatch(fetchNewsRequest())
    return fetchnews()
    .then(res => dispatch(fetchNewsSuccess(res.data)))
    .catch(err => dispatch(fetchNewsFailure(err)))
}

export const fetchReport = (id) => (dispatch) => {
   
    dispatch(fetchSingleRequest())
    return fetchSingleNews(id)
    .then(res => dispatch(fetchSingleSuccess(res.data)))
    .catch(err => dispatch(fetchSingleFailure(err)))
}
export const auth=(payload)=>(dispatch)=>{
    dispatch(loginrequest)
    const config={
        method:"post",
        url:"https://reqres.in/api/login",
        data:payload
    }
    axios(config).then(res=> {
        return dispatch(loginsuccess(res.data))
        
    } ).catch(()=>dispatch(loginfail))
}

export const postData = (id, payload) => (dispatch) => {
    dispatch(postNewsRequest())
    return postNews(id, payload)
    .then((res) => {
        dispatch(postNewsSuccess(res.data))
    })
    .catch((err) => dispatch(postNewsFailure(err)))
}


