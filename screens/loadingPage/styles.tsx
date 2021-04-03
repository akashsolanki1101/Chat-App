import {StyleSheet} from 'react-native'

import {useTheme} from '../../hooks/themeProvider/themeProvider'
import {dark} from '../../ui/themes/dark'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                flex:1,
                backgroundColor:dark.theme.backgroundColor,
                justifyContent:'center',
                alignItems:'center',
            },
            appNameImage:{
                width:180,
                height:80,
                marginBottom:10
            }
        })
    )
}