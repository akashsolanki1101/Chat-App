import {StyleSheet} from 'react-native'

import {useTheme} from '../../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                position:'absolute',
                right:20,
                bottom:25,
                backgroundColor:theme.theme.activeColor,
                borderRadius:50,
                elevation:2,
                overflow:'hidden'  
            },
            iconContainer:{
                flex:1,
                paddingVertical:15,
                paddingHorizontal:15,
                borderRadius:50,
            },
            messageIcon:{
                color:'white',
            }
        })
    )
}