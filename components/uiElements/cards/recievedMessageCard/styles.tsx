import {StyleSheet,Dimensions} from 'react-native'

import {useTheme} from '../../../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                width:'100%',
                marginTop:20,
                zIndex:1
            },
            swipeableContainer:{
                width:'100%',
                alignItems:'flex-end',
                paddingVertical:1,
            },
            recievedMessageCardContainer:{
                width:'100%',
                alignItems:'flex-start',
            },
            recievedMessageCard:{
                maxWidth:'80%',
                backgroundColor:theme.theme.receiver,
                elevation:2,
                borderTopRightRadius:30, 
                borderBottomRightRadius:30,
                paddingHorizontal:30,
                paddingVertical:20,
                alignItems:'flex-start',
                justifyContent:'flex-start'
            },
            recievedMessageText:{
                color:theme.theme.primaryTextColor,
                fontSize:17,
            },
            messageTime:{
                paddingHorizontal:30,
                marginTop:10,
            },
            messageTimeText:{
                color:theme.theme.secondaryTextColor,
                fontSize:12
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