import React from 'react'

import {View, Text, StyleSheet,Image } from 'react-native'

import {useStyles} from './styles'

export const Avatar = ({imgSrc,style})=>{
    const styles = useStyles()
    return(
        <View style={{...styles.container,...style}}>
            <Image source={{uri:imgSrc}} style={{...styles.image,...style}}/>
        </View>
    )
}