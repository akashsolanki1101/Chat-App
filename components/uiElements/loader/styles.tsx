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
            loaderContainer:{
                width:300,
                height:90,
                paddingVertical:15,
                paddingHorizontal:20, 
                backgroundColor:theme.theme.backgroundColor,
                flexDirection:'row',
                borderWidth:2,
                borderColor:theme.theme.primaryTextColor,
                borderRadius:5,
                alignItems:'center'
            },
            loaderText:{
                color:theme.theme.primaryTextColor,
                fontSize:20,
                marginLeft:20,
            }
        })
    )
}