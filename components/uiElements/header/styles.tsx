import {StyleSheet} from 'react-native'

import {useTheme} from '../../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            header:{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                paddingHorizontal:5,
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
            pageNameContainer:{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
            },
            pageNameText:{
                fontSize:18,
                color:theme.theme.primaryTextColor,
                fontWeight:'bold'
            },
        })
    )
}