import React from 'react'


import {View,Text,ActivityIndicator} from 'react-native'

import {useStyles} from './styles'
import {useTheme} from '../../../hooks/themeProvider/themeProvider'

export const Loader = ({message})=>{
    const styles = useStyles()
    const theme = useTheme()
    return(
        <View style={styles.container}> 
            <View style={styles.loaderContainer}>
                <ActivityIndicator size={35} color={theme.theme.activeColor}/>
                <Text style={styles.loaderText}>{message}</Text>
            </View>        
        </View>
    )
}
