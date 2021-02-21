import {StyleSheet} from 'react-native'

import {useTheme} from '../../../hooks/themeProvider/themeProvider'


export const useStyles= ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
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
                textAlignVertical:'center'
            },
            a:{
               fontSize:30,
               textAlign:'center',
               color:theme.theme.activeColor,
               textAlignVertical:'center',
               fontWeight:'bold' 
            }
        })
    )
}