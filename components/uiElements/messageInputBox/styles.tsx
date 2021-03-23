import {StyleSheet} from 'react-native'

import {useTheme} from '../../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                width:'100%',
                paddingHorizontal:10,
                paddingBottom:15,
                zIndex:5,
                backgroundColor:theme.theme.backgroundColor,
                paddingTop:10,
            },
            messageBoxContainer:{
                width:'100%',
                borderWidth:2,
                borderColor:theme.theme.primaryTextColor,
                borderRadius:32,
                display:'flex',
                // flexDirection:'row',
                // justifyContent:'space-between',
                alignItems:'center',
                paddingVertical:8,
                paddingHorizontal:10
            },
            bottomContainer:{
                flexDirection:'row',
                alignItems:'center',
                marginTop:5
            },
            inputContainer:{
                flex:1,
            },
            textInput:{
                width:'100%',
                maxHeight:100,
                padding:0,
                paddingLeft:10,
                margin:0,
                color:theme.theme.primaryTextColor,
            },
            searchIcon:{
                color:theme.theme.primaryTextColor
            },
            sendButton:{
                color:theme.theme.primaryTextColor
            },
            activeSendButton:{
                color:theme.theme.activeColor
            },
        })
    )
}