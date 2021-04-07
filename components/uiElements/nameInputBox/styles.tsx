import {StyleSheet} from 'react-native'

import {useTheme} from '../../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()
    return(
        StyleSheet.create({
            container:{
                width:'100%',
                height:'100%',
                justifyContent:'flex-end',
                alignItems:'center',
            },
            popUpContainer:{
                width:'100%',
                height:150,
                backgroundColor:theme.theme.backgroundColor,
                paddingHorizontal:18,
                paddingVertical:14,
            },
            titleContainer:{
                width:'100%'
            },
            titleText:{
                color:theme.theme.primaryTextColor,
                fontSize:18
            },
            textInputContainer:{
                flexDirection:'row',
                borderBottomColor:theme.theme.activeColor,
                borderBottomWidth:2,
                marginVertical:16,
                justifyContent:'space-between',
                paddingHorizontal:5,
            },
            textInput:{
                width:'90%',
                color:theme.theme.primaryTextColor,
                fontSize:17,
                padding:0
            },
            lengthLimitText:{
                color:theme.theme.secondaryTextColor,
                textAlignVertical:'center',
                fontSize:15
            },
            responseButtonContainer:{
                flexDirection:'row',
                justifyContent:'space-between',
                marginTop:5
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