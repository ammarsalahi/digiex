import {SessionSave,SessionGet} from '../store/SessionStoring';
const initialState={
    phone:"",
    token:"",
    times:0
}


const LoginReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_LOGIN":
            return {
                ...state,
                phone:SessionSave('phones',action.phone),
                token:SessionSave('temps',action.token),
                times:SessionSave('times',action.times),
            }
        case "DEL_LOGIN":
            return {
                ...state,
                phone:"",
                token:"",
                times:"",
            }   
        default:
            return{
                ...state,
                phone:SessionGet('phones'),
                token:SessionGet('temps'),
                times:SessionGet('times')
            }    
    }
}

export default LoginReducer;
