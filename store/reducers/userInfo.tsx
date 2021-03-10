const initialState = {
    userInfo : {}
}

const reducer = (state=initialState,action:object)=>{
    switch(action.type){
        case "SET_USER_INFO":
            return{
                ...state,
                userInfo:action.userInfo
            }

        default:
            return state
    }
}

export default reducer