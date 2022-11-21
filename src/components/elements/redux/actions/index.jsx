
const loginAction=(token,phone,times)=>{
    return {
        type:"ADD_LOGIN",
        phone:phone,
        token:token,
        times:times
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

const addAllCrypto=(cryptocurrencyId,amount,price,totalPrice,priceHistoryId)=>{
      return {
        type:"ADD_ALL",
        cryptocurrencyId: cryptocurrencyId,
        amount: amount ,
        totalPrice: totalPrice,
        price: price,
        priceHistoryId: priceHistoryId
      }  
}
const addCryptoId=(payload)=>{
    return {
      type:"ADD_CID",
        cryptocurrencyId:payload
    }  
}
const addAmount=(payload)=>{
    return {
      type:"ADD_AMOUNT",
      amount: payload ,
    }  
}
const addPrice=(payload)=>{
    return {
      type:"ADD_PRICE",
      price: payload,
    }  
}
const addTotal=(payload)=>{
    return {
      type:"ADD_TOTAL",
      payload: payload,
    }  
}
const addHistory=(payload)=>{
    return {
      type:"ADD_HISTORYID",
      priceHistoryId: payload
    }  
}



const addCrypto=(id,buy,sell,history,section)=>{
    return {
        type:"ADD_CRYPTO",
        sell:sell,
        buy: buy,
        id:id,
        history:history,
        section:section
    }
}
const addPay=(payload)=>{
    return {
      type:"ADD_PAY",
      payload: payload
    }  
}

const buyCrypto=(price,amount)=>{
    return {
        type:"BUY_CRYPTO",
        amount:amount,
        price:price
    }
}

const addUserState=(payload)=>{
    return {
        type:"ADD_STATE",
        payload:payload
    }
}
const initTime=(payload)=>{
    return {
        type:"INIT_TIME",
        payload:payload,
    }
}
export {
    authAction,
    logoutAction,
    loginAction,
    removelogAction,
    profilelogAction,
    addprofileAction,
    addAllCrypto,
    addCryptoId,
    addHistory,
    addTotal,
    addPrice,
    addAmount,
    addCrypto,
    addPay,
    buyCrypto,
    addUserState,
    initTime,
}