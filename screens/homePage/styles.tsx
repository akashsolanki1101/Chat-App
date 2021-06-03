import {StyleSheet} from 'react-native'

import {useTheme} from '../../hooks/themeProvider/themeProvider'

export const useStyles= ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                flex:1,
                backgroundColor:theme.theme.backgroundColor,
            },
            header:{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                paddingRight:5,
                paddingLeft:18,
                paddingVertical:12,
            },
            dataLoadingSpinnerContainer:{
                width:'100%',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                position:'absolute',
                top:60
            },
            dataLoadingSpinner:{
                backgroundColor:theme.theme.backgroundColor,
                elevation:5
            },
            avatar:{
                width:40,
                height:40
            },
            hamburger:{
                color:theme.theme.primaryTextColor,
            },
            menuButton:{
                color:theme.theme.primaryTextColor,
            },
            listContainer:{
                flex:1,
                paddingLeft:9,
                paddingVertical:12
            },
            searchIcon:{
                color:theme.theme.primaryTextColor,
            },
        })
    )
}