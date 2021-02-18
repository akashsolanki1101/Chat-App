import {StyleSheet} from 'react-native'

import {useTheme} from '../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                width:'100%',
                paddingHorizontal:18,
                paddingBottom:15,
                position:'absolute',
                bottom:0,
                zIndex:5,
                backgroundColor:theme.theme.backgroundColor
            },
            messageBoxContainer:{
                width:'100%',
                borderWidth:2,
                borderColor:theme.theme.primaryTextColor,
                borderRadius:30,
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                paddingVertical:12,
                paddingHorizontal:18
            },
            inputContainer:{
                width:'90%',
            },
            textInput:{
                width:'100%',
                maxHeight:50,
                padding:0,
                paddingLeft:10,
                margin:0,
                color:theme.theme.primaryTextColor,
            },
            searchIcon:{
                color:theme.theme.primaryTextColor
            },
            sendButton:{
                color:theme.theme.activeColor
            }
        })
    )
}