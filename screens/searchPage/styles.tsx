import {StyleSheet} from 'react-native'

import {useTheme} from '../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                flex:1,
                backgroundColor:theme.theme.backgroundColor,
            },
            header:{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                // borderWidth:1,
            },
            backButton:{
                color:theme.theme.primaryTextColor
            },
        })
    )
}