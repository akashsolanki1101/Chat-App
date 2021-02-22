import {StyleSheet} from 'react-native'

import {useTheme} from '../../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                backgroundColor:theme.theme.activeColor,
                paddingVertical:3,
                paddingHorizontal:5,
                minWidth:25,
                borderRadius:50,
                justifyContent:'center',
                alignItems:'center'
            },
            badgeText:{
                color:theme.theme.messageTextColor,
                fontSize:12,
                textAlignVertical:'center',
                textAlign:'center'
            }
        })
    )
}