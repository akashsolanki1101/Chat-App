import React from 'react'

import {View,Text} from 'react-native'

import {useStyles} from './styles'

export const RecievedMessageCard = ({message})=>{
    const styles = useStyles()
    return(
        <View style={styles.container}>
            <View style={styles.recievedMessageCard}>
                <Text style={styles.recievedMessageText}>{message}</Text>
            </View>
            <View style={styles.messageTime}>
                <Text style={styles.messageTimeText}>Today, 10:00 am</Text>
            </View>
        </View>
    )
}