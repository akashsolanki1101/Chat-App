export const setUserInfo = (data:object)=>{
    return{
        type:"SET_USER_INFO",
        userInfo:data
    }
}

export const setThemeFormat = (data:string)=>{
    return{
        type:"SET_THEME_FORMAT",
        themeFormat:data
    }
}