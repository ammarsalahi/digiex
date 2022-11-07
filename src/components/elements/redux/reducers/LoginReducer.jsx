import {SessionSave,SessionGet} from '../store/SessionStoring';
const initialState={
    phone:"",
    token:"",
}


const LoginReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_LOGIN":
            return {
                ...state,
                phone:SessionSave('phones',action.phone),
                token:SessionSave('temps',action.token)
            }
        case "DEL_LOGIN":
            return {
                ...state,
                phone:"",
                token:""
            }   
        default:
            return{
                ...state,
                phone:SessionGet('phones'),
                token:SessionGet('temps')
            }    
    }
}

export default LoginReducer;
