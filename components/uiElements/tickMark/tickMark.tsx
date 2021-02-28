import React from 'react'

import {View} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import {useStyles} from './styles'

export const TickMark = ()=>{
    const styles = useStyles()

    return(
        <View style={styles.container}>
            <Feather name="check" size={20} style={{...styles.tickMarkIcon,...styles.tickMarkIcon1}}/>
            <Feather name="check" size={20} style={styles.tickMarkIcon}/>
        </View>
    )
}