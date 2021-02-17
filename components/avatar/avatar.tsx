import React from 'react'

import {View, Text, StyleSheet,Image } from 'react-native'

const useStyles = ()=>{
    return(
        StyleSheet.create({
            container:{
                width : 50,
                height : 50,
                borderRadius: 25,
            }
        })
    )
}

export const Avatar = ()=>{
    const styles = useStyles()
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/favicon.png')}/>
        </View>
    )
}