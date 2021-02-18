import {StyleSheet} from 'react-native'

import {useTheme} from '../../hooks/themeProvider/themeProvider'

import {layoutConstants} from '../../constants/layout/layout'

export const useStyles= ()=>{
    const theme = useTheme()



    return(
        StyleSheet.create({
            container:{
                flex:1
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
            listContainer:{
                flex:1,
                backgroundColor:theme.theme.backgroundColor,
                paddingLeft:9,
            },
        })
    )
}