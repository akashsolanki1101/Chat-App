import {StyleSheet} from 'react-native'

import {useTheme} from '../../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()
    return(
        StyleSheet.create({
            container:{
                // justifyContent:'flex-end',
                // alignItems:'center',
                position:'relative'
            },
            optionsPopUp:{
                position:'absolute',
                // bottom:0,
                width:'100%',
                height:200,
                backgroundColor:theme.theme.backgroundColor
            }
        })
    )
}