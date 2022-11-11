
const loginAction=(token,phone)=>{
    return {
        type:"ADD_LOGIN",
        phone:phone,
        token:token
    }
}
const removelogAction=()=>{
    return {
        type:"DEL_LOGIN",
    }
}

const authAction=(auth)=>{
    return {
        type:"ADD_AUTH",
        payload:auth
    }
}

const logoutAction=()=>{
    return {
        type:"DEL_AUTH",
    }
}

const profilelogAction=(level,userid,fullname)=>{
    return {
        type:'ADD_PROFILE_LOG',
        level:level,
        userid:userid,
        fullname:fullname,
    }
}

const addprofileAction=(phone,fullname,date,userid,pid)=>{
    return {
        type:'ADD_PROFILE',
        phone:phone,
        userid:userid,
        fullname:fullname,
        date:date,
        pid:pid
    }
}
export {
    authAction,
    logoutAction,
    loginAction,
    removelogAction,
    profilelogAction,
    addprofileAction
}