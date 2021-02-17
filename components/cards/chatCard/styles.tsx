import {StyleSheet} from 'react-native'

import {useTheme} from '../../../hooks/themeProvider/themeProvider'
import {layoutConstants} from '../../../constants/layout/layout'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                display:'flex',
                flexDirection:'row',
                borderTopLeftRadius:38,
                borderBottomLeftRadius:38,
                paddingVertical:layoutConstants.paddingVertical,
                paddingHorizontal:layoutConstants.paddingHorizontal,
                backgroundColor:theme.theme.sender,
                marginBottom:15,
                justifyContent:'space-between',
                elevation:4
            },
            avatarContainer:{
            },
            middleContainer:{
                width:'60%',
                overflow:'hidden',
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                paddingVertical:4.5
            },
            senderNameContainer:{

            },
            senderNameText:{
                fontWeight:'bold',
                fontSize:17,
                color:theme.theme.primaryTextColor
            },
            messageContainer:{

            },
            messageText:{
                color:theme.theme.tertiaryTextColor

            },
            messageTimeContainer:{
                paddingVertical:8,
            },
            messageTimeText:{
                color : theme.theme.secondaryTextColor,
                fontWeight:'bold',
                fontSize:12
            }

        })
    )
}