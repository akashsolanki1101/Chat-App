import React from 'react'

import {View,Text,TouchableNativeFeedback,TouchableOpacity} from 'react-native'

import {Avatar} from '../../avatar/avatar'
import { Badge } from '../../badge/badge'
import {useStyles} from './styles'

export const ChatCard = ({data,navigation,onAvatarClick,handleCloseDropDown})=>{
    const styles = useStyles()

    const handleOnClickChatCard = ()=>{
        handleCloseDropDown()
        navigation.navigate("ChatPage",{
            user:data
        })
    }

    return(
        <View style={styles.container}>
            <TouchableNativeFeedback
                onPress={handleOnClickChatCard}
                onLongPress={()=>{console.log("hello");
                }}
            >
                <View style={styles.card}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        onPress={onAvatarClick}
                    >
                        <View style={styles.avatarContainer}>
                            <Avatar imgSrc={data.imageUri} style={{}}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.middleContainer}>
                        <View style={styles.senderNameContainer}>
                            <Text style={styles.senderNameText}>{data.name}</Text>
                        </View>
                        <View style={styles.messageContainer}>
                            <Text numberOfLines={1} style={styles.messageText}>{data.message}</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.messageTimeContainer}>
                            <Text style={styles.messageTimeText}>{data.time}</Text>
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