import React from 'react'

import {View, Text, StyleSheet,Image } from 'react-native'

import {useStyles} from './styles'

export const Avatar = ({imgSrc})=>{
    const styles = useStyles()
    return(
        <View style={styles.container}>
            <Image source={imgSrc} style={styles.image}/>
        </View>
    )
}