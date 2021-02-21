import {StyleSheet,Dimensions} from 'react-native'

import {useTheme} from '../../../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                // maxWidth:'80%',
                width:'100%',
                marginTop:20,
                alignItems:'flex-start',
                zIndex:1
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