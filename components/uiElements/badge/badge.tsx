import React from 'react'

import {View,Text} from 'react-native'

import {useStyles} from './styles'

export const Badge = ({value})=>{
    const styles = useStyles()

    if(value===0){
        return null
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.badgeText}>{value}</Text>
        </View>
    )
}