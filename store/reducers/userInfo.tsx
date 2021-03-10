const initialState = {
    userInfo : {},
    themeFormat: "Dark"
}

const reducer = (state=initialState,action:object)=>{
    switch(action.type){
        case "SET_USER_INFO":
            return{
                ...state,
                userInfo:action.userInfo
            }

        case "SET_THEME_FORMAT":
            return{
                ...state,
                themeFormat:action.themeFormat
            }

        default:
            return state
    }
}

export default reducer