import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer'
const Reducers=combineReducers({
    login:LoginReducer,
    authtoken:AuthReducer,
    profile:ProfileReducer,
});

export default Reducers