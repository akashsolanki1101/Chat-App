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
            dropDownContainer:{
                width:350,
                paddingVertical:8,
                backgroundColor:theme.theme.receiver,
            },
            titleTextContainer:{
                width:'100%',
                paddingVertical:18,
                paddingHorizontal:22,
            },
            titleText:{
                color:theme.theme.primaryTextColor,
                fontSize:22
            },
            themeOptionsContainer:{
                width:'100%',
            },
            optionContainer:{
                flexDirection:'row',
                paddingHorizontal:21,
                paddingVertical:10
            },
            radioButtonContainer:{
                marginRight:20
            },
            optionTextContainer:{},
            optionText:{
                color:theme.theme.primaryTextColor,
                fontSize:18,
            },
            responseButtonContainer:{
                flexDirection:'row',
                justifyContent:'space-between',
                paddingHorizontal:18,
                paddingVertical:8,
            },
            responseButton:{
                paddingVertical:6,
                paddingHorizontal:5
            },
            responseButtonText:{
                color:theme.theme.activeColor,
                fontSize:17
            }
        })
    )
}