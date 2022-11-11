import { LocalSave,LocalGet,LocalDel } from "../store/LocalStoring"

const initialState={
    phone:"",
    image:"",
    email:"",
    fullname:"",
    userid:"",
    date:"",
    pid:"",
    level:""
}

const ProfileReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_PROFILE_LOG":
            return {
            ...state,
                userid:LocalSave('user-id',action.userid),
                fullname:LocalSave('user-full',action.fullname),
                level:LocalSave('user-level',action.level),
            }
        case "ADD_PROFILE":
            return {
            ...state,
                phone:LocalSave('user-phone',action.phone),
                fullname:LocalSave('user-full',action.fullname),
                date:LocalSave('user-date',action.date),
                pid:LocalSave('user-pid',action.pid),
                level:LocalSave('user-level',action.level),
            }    
        default:
            return {
                ...state,
                phone:LocalGet('user-phone'),
                fullname:LocalGet('user-full'),
                date:LocalGet('user-date'),
                userid:LocalGet('user-id'),
                pid:LocalGet('user-pid'),
                level:LocalGet('user-level')
            } 

    }
}

export default ProfileReducer;