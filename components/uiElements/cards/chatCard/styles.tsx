import {StyleSheet} from 'react-native'

import {useTheme} from '../../../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                borderTopLeftRadius:38,
                borderBottomLeftRadius:38,
                overflow:'hidden',
                marginBottom:15,
                elevation:2,
            },
            card:{
                display:'flex',
                flexDirection:'row',
                borderTopLeftRadius:38,
                borderBottomLeftRadius:38,
                paddingVertical:10,
                paddingHorizontal: 14,
                backgroundColor:theme.theme.receiver,
                justifyContent:'space-between',
                elevation:2,

            },
            middleContainer:{
                width:'60%',
                overflow:'hidden',
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                paddingVertical:4.5
            },
            avatarContainer:{
                borderRadius: 30,
                overflow:'hidden'
            },
            senderNameContainer:{
                overflow:'hidden'
            },
            senderNameText:{
                fontWeight:'bold',
                fontSize:17,
                color:theme.theme.primaryTextColor
            },
            messageContainer:{
                overflow:'hidden'
            },
            messageText:{
                color:theme.theme.tertiaryTextColor
            },
            badgeContainer:{
                justifyContent:'center',
                alignItems:'center'
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