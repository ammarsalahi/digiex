const initialState={
    cryptocurrencyId: 0,
    amount: 0,
    totalPrice: 0,
    buyprice: 0,
    sellprice:0,
    priceHistoryId: 0,
    discounts:"",
    section:1,
    pay:0
}
const CryptoReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_ALL":
            return {
                ...state,
                cryptocurrencyId: action.cryptocurrencyId,
                amount: action.amount ,
                totalPrice: action.totalPrice,
                sellprice: action.sell,
                buyprice: action.buy,
                priceHistoryId: action.priceHistoryId,
                discounts: action.discounts,
                section:action.section,
                pay:action.pay
            }
        case "ADD_CID":
                return {
                    ...state,
                    cryptocurrencyId: action.payload,
                }
        case "ADD_PRICE":
                return {
                    ...state,
                    sellprice: action.sell,
                    buyprice: action.buy,
                }  
        case "ADD_TOTAL":
                    return {
                        ...state,
                        totalPrice: action.payload,
                    }       
        case "ADD_HISTORYID":
                return {
                    ...state,
                    priceHistoryId: action.payload
                }    
        case "ADD_AMOUNT":
            return {
                    ...state,
                    amount: action.payload ,
            }   
        case "ADD_PAY":
                return {
                        ...state,
                        pay: action.payload ,
                }  
        case "ADD_DISCOUNT":
                    return {
                            ...state,
                            discounts: action.payload ,
                    }             
        case "ADD_CRYPTO":
                return {
                    ...state,
                    sellprice: action.sell,
                    buyprice: action.buy,
                    cryptocurrencyId:action.id,
                    priceHistoryId:action.history,
                    section:action.section
                }  
        case "BUY_CRYPTO":
            const final=action.amount * action.buyprice
            return{
                ...state,
                totalPrice:final
            }                               
        default:
            return state
    }

}

export default CryptoReducer