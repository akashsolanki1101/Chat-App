import React from 'react'

import {View,Text} from 'react-native'

import {useStyles} from './styles'

export const AppName = ({style={}})=>{
    const styles = useStyles()

    return(
        <View style={styles.appNameContainer}>
            <Text style={{...styles.appName,...style}}>ch</Text>
            <Text style={{...styles.a,...style}}>A</Text>
            <Text style={{...styles.appName,...style}}>t</Text>
        </View>
    )
}