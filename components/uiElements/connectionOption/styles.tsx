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
            option:{
                width:'98%',
                marginBottom:15,
                backgroundColor:theme.theme.receiver,
                paddingHorizontal:10,
                paddingVertical:10,
                borderRadius:5,
                flexDirection:'row',
                justifyContent:'space-between'
            },
            primaryText:{
                color:theme.theme.primaryTextColor,
                fontSize:20,
                fontWeight:'bold',
                marginBottom:5
            },
            secondaryText:{
                color:theme.theme.secondaryTextColor,
                fontWeight:'bold',
            },
            enterIconContainer:{
                justifyContent:'center',
                alignItems:'center'
            },
            enterIcon:{
                color:theme.theme.secondaryTextColor
            }
        })
    )
}