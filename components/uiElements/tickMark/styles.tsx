import {StyleSheet} from 'react-native'

import {useTheme} from '../../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                flexDirection:'row',
                // marginLeft:10
            },
            tickMarkIcon:{
                color:theme.theme.activeColor,
                margin:0,
                padding:0,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
            },
            tickMarkIcon1:{
                color:theme.theme.secondaryTextColor,
            },
            tickMarkIcon2:{
                position:'absolute',
                right:4,
                elevation:1
            }
            
        })
    )
}