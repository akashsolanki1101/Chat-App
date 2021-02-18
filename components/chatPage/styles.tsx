import {StyleSheet} from 'react-native'

import {useTheme} from '../../hooks/themeProvider/themeProvider'

export  const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                flex:1,
                backgroundColor:theme.theme.backgroundColor
            },
            header:{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                paddingHorizontal:14,
                paddingVertical:14,
                color:theme.theme.primaryTextColor,
            },
            leftContainer:{
                flexDirection:'row',
                alignItems:'center'
            },
            backButton:{
                color:theme.theme.primaryTextColor
            },
            userInfoContainer:{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
            },
            avatar:{
                width:45,
                height:45
            },
            senderNameContainer:{
                marginLeft:15
            },
            senderNameText:{
                fontSize:18,
                color:theme.theme.primaryTextColor,
                fontWeight:'bold'
            },
            menuButton:{
                color:theme.theme.primaryTextColor,
            },
            messageList:{
                // width:'100%'
            }
            
        })
    )
}
