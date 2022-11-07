const SessionSave=(key,item)=>{
    sessionStorage.setItem(key,item);
    return sessionStorage.getItem(key)
}

const SessionGet=(key)=>{
    return sessionStorage.getItem(key)
}

const  SessionDel=(key)=>{
    sessionStorage.removeItem(key)
    return ""
}
export { SessionSave,SessionGet};