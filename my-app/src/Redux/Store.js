import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { newsReducer, reportReducer } from "./News/Reducer";
import { AuthReducer } from "../Redux/Auth/reducer";

const rootReducer = combineReducers({ 
    app : newsReducer,  
    news: reportReducer,
    auth: AuthReducer
 });

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;