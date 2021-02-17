import {StyleSheet} from 'react-native'

import {useTheme} from '../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                flex:1,
                backgroundColor:theme.theme.backgroundColor,
                paddingLeft:10,
            },
            appNameContainer:{
                flexDirection:'row',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            },
            appName:{
                color:theme.theme.primaryTextColor,
                fontSize:30,
                textAlign:'center',
            },
            a:{
               fontSize:30,
               textAlign:'center',
               color:theme.theme.activeColor 
            }
        })
    )
}
