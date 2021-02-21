import React from 'react'

import {View,Text} from 'react-native'

import {useStyles} from './styles'

export const AppName = ()=>{
    const styles = useStyles()

    return(
        <View style={styles.appNameContainer}>
            <Text style={styles.appName}>ch</Text>
            <Text style={styles.a}>A</Text>
            <Text style={styles.appName}>t</Text>
        </View>
    )
}