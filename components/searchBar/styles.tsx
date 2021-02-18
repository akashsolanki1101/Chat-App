import {StyleSheet} from 'react-native'

import {useTheme} from '../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                width:'100%',
                paddingHorizontal:18,
                marginVertical:22,
            },
            searchBarContainer:{
                width:'100%',
                borderWidth:2,
                borderColor:theme.theme.primaryTextColor,
                borderRadius:30,
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                paddingVertical:12,
                paddingHorizontal:18
            },
            inputContainer:{
                width:'90%',
            },
            textInput:{
                width:'100%',
                padding:0,
                paddingLeft:10,
                margin:0,
                color:theme.theme.primaryTextColor,
            },
            searchIcon:{
                color:theme.theme.primaryTextColor
            },
        })
    )
}