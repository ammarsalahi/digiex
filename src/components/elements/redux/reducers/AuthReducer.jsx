import {LocalSave,LocalGet,LocalDel} from '../store/LocalStoring'
const initialState={
    auth:""
}

const AuthReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_AUTH':
            return {
                ...state,
                auth:LocalSave('auth-tokens',action.payload)
            }
        case 'DEL_AUTH':
            return{
                ...state,
                auth:LocalDel('auth-tokens')
            }    
        default:
            return {
                ...state,
                auth:LocalGet('auth-tokens')
            }  
    }
}

export default AuthReducer;
