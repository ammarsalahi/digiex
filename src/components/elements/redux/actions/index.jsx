
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
export {
    authAction,
    logoutAction,
    loginAction,
    removelogAction
}