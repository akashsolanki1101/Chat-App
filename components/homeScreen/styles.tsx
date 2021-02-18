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
                paddingHorizontal:18,
                paddingTop:12
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
            },
            searchIcon:{
                color:theme.theme.primaryTextColor,
                marginRight:15,
            },
        })
    )
}