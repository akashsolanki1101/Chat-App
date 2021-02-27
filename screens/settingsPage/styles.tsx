import {StyleSheet} from 'react-native'

import {useTheme} from '../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                flex:1,
                backgroundColor:theme.theme.backgroundColor,
                position:'relative'
            },
            themeButtonContainer:{
                flexDirection:'row',
                paddingHorizontal:15,
                paddingVertical:12,
                borderBottomColor:theme.theme.secondaryTextColor,
                borderBottomWidth:.5
            },
            themeButtonIconContainer:{
                justifyContent:'center',
                marginRight:35
            },
            themeButtonText:{
                color:theme.theme.primaryTextColor,
                fontSize:20,
            },
            themeModeText:{
                color:theme.theme.secondaryTextColor,
                marginTop:2
            },
            nameButtonContainer:{
                flexDirection:'row',
                paddingHorizontal:15,
                paddingVertical:12,
                borderBottomColor:theme.theme.secondaryTextColor,
                borderBottomWidth:.5
            },
            nameButtonIconContainer:{
                justifyContent:'center',
                marginRight:35
            },
            nameButtonText:{
                color:theme.theme.primaryTextColor,
                fontSize:20,   
            },
            nameText:{
                color:theme.theme.secondaryTextColor,
                marginTop:2
            },
            developerNameContainer:{
                flex:1,
                justifyContent:'flex-end',
                alignItems:'center',
                paddingBottom:5
            },
            fromText:{
                color:theme.theme.secondaryTextColor,
            },
            developerName:{
                color:theme.theme.primaryTextColor,
                fontWeight:'bold'
            }
        })
    )
}