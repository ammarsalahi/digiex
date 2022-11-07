import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import AuthReducer from './AuthReducer';

const Reducers=combineReducers({
    login:LoginReducer,
    authtoken:AuthReducer
});

export default Reducers