import { FETCH_NEWS_DATA, FETCH_NEWS_FAILURE, FETCH_NEWS_SUCCESS } from "./ActionTypes";

const initState = {
    news : [],
    loading: false,
    error: false
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
    
        default:{
            return state
        }
            
    }
}