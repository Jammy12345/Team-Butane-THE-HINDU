import { saveData,loadData } from "../../Components/LocalstorageAuth";
import { FETCH_NEWS_DATA, FETCH_NEWS_FAILURE, FETCH_NEWS_SUCCESS,LOGIN_REQUEST,LOGIN_FAIL,LOGIN_SUCCESS } from "./ActionTypes";



const initState = {
    news : [],
    loading: false,
    error: false,
    authEmail:"",
    
}

export const newsReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case (FETCH_NEWS_DATA):{
            return {
                ...state,
                loading: true
            }
        }
        case (FETCH_NEWS_SUCCESS):{
            return {
                ...state,
                news : payload,
                loading: false
            }
        }
        case (FETCH_NEWS_FAILURE):{
            return {
                ...state,
                loading: false,
                error : true
            }
        }

        case (LOGIN_REQUEST):{
            return{
                ...state,
                loading:true
            }
        }
        case (LOGIN_FAIL):{
            return{
                ...state,
                loading: false,
                error : true
            }
        }
        case (LOGIN_SUCCESS):{
            saveData("token",payload.token)
            return{
                ...state,
                authEmail:"eve.holt@reqres.in",
                loading: false,
                error:false
            }
        }

    
        default:{
            return state
        }
            
    }
}