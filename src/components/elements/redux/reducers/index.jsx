import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer'
import CryptoReducer from './CryptoReducer'

const Reducers=combineReducers({
    login:LoginReducer,
    authtoken:AuthReducer,
    profile:ProfileReducer,
    crypto:CryptoReducer,
});

export default Reducers