import {StyleSheet} from 'react-native'

import {useTheme} from '../../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()
    return(
        StyleSheet.create({
            container:{
                flex:1,
                justifyContent:'flex-end',
                alignItems:'center',
                
            },
            optionsPopUp:{
                width:'100%',
                height:160,
                backgroundColor:theme.theme.backgroundColor,
                borderTopLeftRadius:10,
                borderTopRightRadius:10,
                paddingHorizontal:15,
            },
            header:{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                paddingVertical:8,
            },
            titleText:{
                color:theme.theme.primaryTextColor,
                fontSize:18,
                fontWeight:'bold',
            },
            closeIcon:{
                color:theme.theme.primaryTextColor
            },
            optionsContainer:{
                flex:1,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                paddingHorizontal:10,
            },
            option:{
                justifyContent:'center',
                alignItems:'center'
            },
            optionsImage:{
                width:50,
                height:50,
            },
            optionText:{
                color:theme.theme.primaryTextColor,
            },
        })
    )
}