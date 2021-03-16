import {StyleSheet} from 'react-native'

import {useTheme} from '../../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                width:'100%',
                height:'100%',
                justifyContent:'center',
                alignItems:'center',
            },
            errorBox:{
                width:300,
                height:155,
                backgroundColor:theme.theme.backgroundColor,
                paddingHorizontal:15,
                paddingVertical:12,
                justifyContent:'space-between'
            },
            titleContainer:{
                width:'100%',
                backgroundColor:theme.theme.backgroundColor,
            },
            title:{
                color:theme.theme.primaryTextColor,
                fontSize:20,
            },
            errorMessage:{

            },
            errorMessageText:{
                color:theme.theme.primaryTextColor,
                fontSize:16
            },
            responseButtonContainer:{
                width:'100%',
                alignItems:'flex-end'
            },
            responseButton:{
                width:40,
                paddingVertical:2,
                alignItems:'center',
                justifyContent:'center',
            },
            responseButtonText:{
                fontSize:18,
                color:theme.theme.activeColor
            }
        })
    )
}