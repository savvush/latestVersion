import { combineReducers } from "redux";

import tabReducer from "./tab/tabReducer";
import trainersReducer from "./trainers/trainersReducer";
import userReducer from "./user/userReducer";

export default combineReducers({
    tabReducer,
    trainersReducer,
    userReducer
});