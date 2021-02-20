import {StyleSheet} from 'react-native'

import {useTheme} from '../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                width:200,
                position:'absolute',
                right:10,
                top:10,
                backgroundColor:theme.theme.receiver,
                elevation:7,
                borderWidth:1,
                borderColor:theme.theme.secondaryTextColor
            },
            listItemContainer:{
                // borderBottomWidth:.3,

                // borderBottomColor:theme.theme.secondaryTextColor
            },
            listItem:{
                paddingVertical:12,
                paddingHorizontal:15
            },
            listItemText:{
                color:theme.theme.primaryTextColor,
                fontSize:16
            }
        })
    )
}