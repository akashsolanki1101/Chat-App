import {StyleSheet} from 'react-native'

import {useTheme} from '../../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                width:'100%',
                flexDirection:'row',
                borderBottomWidth:.3,
                borderBottomColor:'#3e424b',
                paddingHorizontal:15,
                paddingVertical:12,
            },
            imageContainer:{
                marginRight:18
            },
            avatar:{
                width:40,
                height:40
            },
            userInfoContainer:{
                flex:1
            },
            nameContainer:{},
            nameText:{
                fontWeight:'bold',
                fontSize:17,
                color:theme.theme.primaryTextColor
            },
            statusContainer:{
                width:'100%',
                overflow:'hidden'
            },
            statusText:{
                color:theme.theme.tertiaryTextColor

            }
        })
    )
}