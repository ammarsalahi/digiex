const initialState={
    verifyPersonalInfo: true,
    verifyRules: true,
    verifyDocumentsByUser: true,
    uploadImageByUser: true,
    verifyImageByAdmin: true,
    uploadVideoByUser: true,
    verifyVideoByAdmin: true,
    verifyDocumentsByAdmin: true,
    states: 0
}

const UserStateReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_STATE":
            return {
                ...state,
                verifyPersonalInfo: action.payload.verifyPersonalInfo,
                verifyRules: action.payload.verifyRules,
                verifyDocumentsByUser: action.payload.verifyDocumentsByUser,
                uploadImageByUser: action.payload.uploadImageByUser,
                verifyImageByAdmin: action.payload.verifyImageByAdmin,
                uploadVideoByUser: action.payload.uploadVideoByUser,
                verifyVideoByAdmin: action.payload.verifyVideoByAdmin,
                verifyDocumentsByAdmin: action.payload.verifyDocumentsByAdmin,
                states: action.payload.states
            }
        default:
           return state    
    }
}

export default UserStateReducer;