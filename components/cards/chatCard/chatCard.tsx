import React from 'react'

import {View,Text,TouchableNativeFeedback} from 'react-native'

import {Avatar} from '../../avatar/avatar'
import {useStyles} from './styles'

export const ChatCard = ({name,message,imgSrc,time})=>{
    const styles = useStyles()

    return(
        <View style={styles.container}>
            <TouchableNativeFeedback>
                <View style={styles.card}>
                    <View style={styles.avatarContainer}>
                        <Avatar imgSrc={imgSrc} style={{}}/>
                    </View>
                    <View style={styles.middleContainer}>
                        <View style={styles.senderNameContainer}>
                            <Text style={styles.senderNameText}>{name}</Text>
                        </View>
                        <View style={styles.messageContainer}>
                            <Text numberOfLines={1} style={styles.messageText}>{message}</Text>
                        </View>
                    </View>
                    <View style={styles.messageTimeContainer}>
                        <Text style={styles.messageTimeText}>{time}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}