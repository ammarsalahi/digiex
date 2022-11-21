 const CodeTimeReducer=(state=0,action)=>{
    switch(action.type){
        case "INIT_TIME":
            state=action.payload
            return state;
        default:
            return state;    
    }
 }

 export default CodeTimeReducer;