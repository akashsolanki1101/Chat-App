import {StyleSheet} from 'react-native'

import {useTheme} from '../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                backgroundColor:theme.theme.backgroundColor,
                paddingVertical:20,
                paddingHorizontal:18
            }
        })
    )

}