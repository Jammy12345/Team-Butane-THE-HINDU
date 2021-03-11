import {
    FETCH_NEWS_DATA,
    FETCH_NEWS_FAILURE,
    FETCH_NEWS_SUCCESS,
    FETCH_SINGLE_DATA,
    FETCH_SINGLE_FAILURE,
    FETCH_SINGLE_SUCCESS,
} from "./ActionTypes";

const initState = {
    news: [],
    loading: false,
    error: false,
};

const initialState = {
    report : {},
    isLoading : false,
    iserror : false
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
        default: {
            return state;
        }
    }
};
