import {StyleSheet} from 'react-native'

import {useTheme} from '../../../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                width:'100%',
                marginTop:20,
            },
            swipeableContainer:{
                width:'100%',
                alignItems:'flex-end',
                paddingVertical:1,

            },
            sentMessageCardContainer:{
                width:'100%',
                alignItems:'flex-end',

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
                fontSize:12,
                textAlign:'right',
            },
            forwardIconContainer:{
                width:50,
                justifyContent:'center',
                alignItems:'center'
            },
            forwardIcon:{
                color:theme.theme.activeColor,
                transform:[
                    {
                        rotateY:'180deg'
                    }
                ]
            },
        })
    )
}