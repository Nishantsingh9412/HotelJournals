import { combineReducers } from "redux";

import authReducer from "./auth";
import currentuserReducer from "./currentUser";
import usersReducer from "./users";
import TipsReducer from "./tipsReducer";
import getTipsReducer from "./getTips";
import singleTipReducer from "./getSingleTips";

export default combineReducers({
    authReducer,
    currentuserReducer,
    usersReducer, 
    TipsReducer,
    getTipsReducer,
    singleTipReducer,

})