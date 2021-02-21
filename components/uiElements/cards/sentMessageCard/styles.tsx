import {StyleSheet} from 'react-native'

import {useTheme} from '../../../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                // maxWidth:'80%',
                width:'100%',
                marginTop:20,
                alignItems:'flex-end'
            },
            sentMessageCard:{
                maxWidth:'80%',
                backgroundColor:theme.theme.sender,
                elevation:2,
                borderTopLeftRadius:30, 
                borderBottomLeftRadius:30,
                paddingHorizontal:30,
                paddingVertical:20,
                alignItems:'flex-end',
                justifyContent:'flex-end'
            },
            sentMessageText:{
                color:theme.theme.messageTextColor,
                fontSize:15,
            },
            messageTime:{
                paddingHorizontal:30,
                marginTop:10,
            },
            messageTimeText:{
                color:theme.theme.secondaryTextColor,
                fontSize:12
            }
        })
    )
}