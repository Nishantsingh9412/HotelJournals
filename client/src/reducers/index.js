import { combineReducers } from "redux";

import authReducer from "./auth";
import currentuserReducer from "./currentUser";

export default combineReducers({
    authReducer,currentuserReducer
})