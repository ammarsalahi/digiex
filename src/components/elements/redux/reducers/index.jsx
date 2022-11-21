import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer'
import CryptoReducer from './CryptoReducer'
import UserStateReducer from "./UserStateReducer";
import CodeTimeReducer from "./CodeTimeReducer";
const Reducers=combineReducers({
    login:LoginReducer,
    authtoken:AuthReducer,
    profile:ProfileReducer,
    crypto:CryptoReducer,
    userstate:UserStateReducer,
    times: CodeTimeReducer,
});

export default Reducers