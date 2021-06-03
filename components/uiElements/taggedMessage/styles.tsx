import {StyleSheet} from 'react-native'

import {useTheme} from '../../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                backgroundColor:"rgba(0,0,0,0.2)",
                paddingVertical:5,
                paddingHorizontal:10,
                borderRadius:10,
            },
            topContainer:{
                overflow:'hidden',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between'
            },
            nameContainer:{
                overflow:'hidden',
                borderRadius:1,
                borderColor:'white'
            },
            taggedMessageSenderText:{
                color:theme.theme.taggedMessageSender,
                fontSize:13,
                fontWeight:'bold'
            },
            bottomContainer:{
                overflow:'hidden'
            },
            taggedMessageText:{
                color:theme.theme.taggedMessageText,
                fontSize:12,
            },
            closeIconWrapper:{
                width:25,
                height:25
            },
            closeIcon:{
                color:theme.theme.primaryTextColor
            },
        })
    )
}