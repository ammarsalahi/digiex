const LocalSave=(key,item)=>{
    localStorage.setItem(key,item)
    return localStorage.getItem(key)
}

const LocalGet=(key)=>{
    return localStorage.getItem(key)
}

const  LocalDel=(key)=>{
    localStorage.removeItem(key)
    return ""
}

export { LocalSave,LocalGet,LocalDel};