import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk"
import {newsReducer} from "./newsReducers";


let reducers = combineReducers({
    news: newsReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
