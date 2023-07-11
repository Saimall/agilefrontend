import { combineReducers } from "redux";
import aboutUsReducer from './about-us-reducer/about-us-reducer';

const rootReducer = combineReducers({
    aboutUsReducer:aboutUsReducer
});

export default rootReducer;
