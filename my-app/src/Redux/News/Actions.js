import { fetchnews, fetchSingleNews, postNews } from "../../Utils/util"
import { FETCH_NEWS_DATA, FETCH_NEWS_FAILURE, FETCH_NEWS_SUCCESS, FETCH_SINGLE_DATA, FETCH_SINGLE_FAILURE, FETCH_SINGLE_SUCCESS, LOGIN_REQUEST,LOGIN_FAIL,LOGIN_SUCCESS, POST_NEWS_DATA, POST_NEWS_SUCCESS, POST_BOOK_DATA, POST_BOOK_SUCCESS, POST_BOOK_FAILURE,SEARCH_NEWS } from "./ActionTypes"
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

const searchnews=(payload)=>{
    return{
        type :SEARCH_NEWS,
        payload
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
    dispatch(fetchNewsRequest())
    const config={
        method:"post",
        url:"https://reqres.in/api/login",
        data:payload
    }
    axios(config).then(res=> {
        return dispatch(loginsuccess(res.data))
        
    } ).catch(()=>dispatch(loginfail))
}

export const fetchSearchNews=(payload)=>(dispatch)=>{
    dispatch(fetchNewsRequest())                                //reusing for loading
    const config={
        method:"get",
        url:"https://fake-server-ashutosh.herokuapp.com/news",
        params:{
            q:payload
        }
    }
    axios(config).then(res=> {
        console.log(res.data)
        return dispatch(searchnews(res.data))
        
    } ).catch((err)=> console.log(err))
}

// dispatch(loginfail())
// export const postData = (id, payload) => (dispatch) => {
//     dispatch(postNewsRequest())
//     return postNews(id, payload)
//     .then((res) => {
//         dispatch(postNewsSuccess(res.data))
//     })
//     .catch((err) => dispatch(postNewsFailure(err)))
// }


