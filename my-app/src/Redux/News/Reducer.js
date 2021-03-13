import {
    FETCH_NEWS_DATA,
    FETCH_NEWS_FAILURE,
    FETCH_NEWS_SUCCESS,
    FETCH_SINGLE_DATA,
    FETCH_SINGLE_FAILURE,
    FETCH_SINGLE_SUCCESS,
    POST_NEWS_DATA, POST_NEWS_SUCCESS, POST_NEWS_FAILURE, POST_BOOK_DATA, POST_BOOK_SUCCESS, POST_BOOK_FAILURE,SEARCH_NEWS 
} from "./ActionTypes";

import { saveData,loadData } from "../../Components/LocalstorageAuth";



const initState = {
    news: [],
    loading: false,
    error: false,
    authEmail:"",
};

const initialState = {
    report : {},
    isLoading : false,
    iserror : false,
}


export const newsReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case FETCH_NEWS_DATA: {
            return {
                ...state,
                loading: true,
            };
        }
        case FETCH_NEWS_SUCCESS: {
            return {
                ...state,
                news: payload,
                loading: false,
            };
        }
        case FETCH_NEWS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: true,
            };
        }
        case POST_BOOK_DATA: {
            return {
                ...state,
                loading: true,
            };
        }
        case POST_BOOK_SUCCESS: {
            return {
                ...state,
                news: payload,
                loading: false,
            };
        }
        case POST_BOOK_FAILURE: {
            return {
                ...state,
                loading: false,
                error: true,
            };
        }
        case (SEARCH_NEWS):{
            return{
                ...state,
                news:payload
            }
        }

        default: {
            return state;
        }
    }
};

export const reportReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_SINGLE_DATA: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case FETCH_SINGLE_SUCCESS: {
            return {
                ...state,
                report: payload,
                isLoading: false,
            };
        }
        case FETCH_SINGLE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        }    
        case POST_NEWS_DATA: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case POST_NEWS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case POST_NEWS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        }  
        default:{
            return state
        }
    }
};
