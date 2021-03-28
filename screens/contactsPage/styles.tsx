import {StyleSheet} from 'react-native'

import {useTheme} from '../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                flex:1,
                backgroundColor:theme.theme.backgroundColor
            },
            optionsContainer:{
                flex:1
            },
            option:{
                // borderWidth:1,
                paddingHorizontal:15,
                paddingVertical:12,
                flexDirection:'row'
            },
            optionIcon:{
               color:theme.theme.primaryTextColor,
               marginRight:35 
            },
            optionText:{
                color:theme.theme.primaryTextColor,
                fontSize:18,
            },
            
        })
    )
}