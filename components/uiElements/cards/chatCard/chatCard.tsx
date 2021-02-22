import React from 'react'

import {View,Text,TouchableNativeFeedback,TouchableOpacity} from 'react-native'

import {Avatar} from '../../avatar/avatar'
import { Badge } from '../../badge/badge'
import {useStyles} from './styles'

export const ChatCard = ({name,message,imgSrc,time,onClick,onAvatarClick})=>{
    const styles = useStyles()

    return(
        <View style={styles.container}>
            <TouchableNativeFeedback
                onPress={onClick}
                onLongPress={()=>{console.log("hello");
                }}
            >
                <View style={styles.card}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        onPress={onAvatarClick}
                    >
                        <View style={styles.avatarContainer}>
                            <Avatar imgSrc={imgSrc} style={{}}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.middleContainer}>
                        <View style={styles.senderNameContainer}>
                            <Text style={styles.senderNameText}>{name}</Text>
                        </View>
                        <View style={styles.messageContainer}>
                            <Text numberOfLines={1} style={styles.messageText}>{message}</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.messageTimeContainer}>
                            <Text style={styles.messageTimeText}>{time}</Text>
                        </View>
                        <View style={styles.badgeContainer}>
                            <Badge
                                value={1}
                            />
                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}