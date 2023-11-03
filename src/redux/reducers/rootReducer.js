import { combineReducers } from "redux";


import filterReducer from "./filterReducer";
import productReducer from "./productReducer";


const rootReducer = combineReducers({
    product:productReducer,
    filters:filterReducer
});

export default rootReducer;