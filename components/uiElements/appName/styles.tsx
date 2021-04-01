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
                alignItems:'center',
            },
            appName:{
                fontSize:30,
                color:theme.theme.primaryTextColor,
                textAlign:'center',
                textAlignVertical:'center',
                fontWeight:'bold' 
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