import React from 'react'

import {View,Text,TouchableNativeFeedback,TouchableOpacity} from 'react-native'

import {Avatar} from '../../avatar/avatar'
import { Badge } from '../../badge/badge'
import {useStyles} from './styles'

export const ChatCard = ({data,navigation,onAvatarClick,handleCloseDropDown})=>{
    const styles = useStyles()
    let DATA = {}
    let lastMessageTime

    if(data){
        DATA = {
            name:data.chatRoom.chatRoomUsers.items[0].user.name,
            imageUri:data.chatRoom.chatRoomUsers.items[0].user.imageUri,
            chatRoomID:data.chatRoomID,
            lastMessage:data.chatRoom.lastMessage.content,
            lastMessageTime:data.chatRoom.lastMessage.createdAt
        }

        const date = new Date(DATA.lastMessageTime).toLocaleDateString()
        const todayDate = new Date().toLocaleDateString()

        const parts = date.split('/')
        const _lastMessageTime = parseInt(`${parts[2]}${parts[0]}${parts[1]}`)

        const parts1 = todayDate.split('/')
        const _todayDate = parseInt(`${parts1[2]}${parts1[0]}${parts1[1]}`)

        if((_todayDate - _lastMessageTime)===0)
        {
            lastMessageTime= "Today"
        }else if((_todayDate - _lastMessageTime)===1){
            lastMessageTime="Yesterday"
        }else{
            lastMessageTime=`${parts[1]}/${parts[0]}/${parts[2]}`
        }                
    }

    const handleOnClickChatCard = ()=>{
        handleCloseDropDown()
        navigation.navigate("ChatPage",{
            user:DATA
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
                            <Avatar imgSrc={DATA.imageUri} style={{}}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.middleContainer}>
                        <View style={styles.senderNameContainer}>
                            <Text numberOfLines={1}style={styles.senderNameText}>{DATA.name}</Text>
                        </View>
                        <View style={styles.messageContainer}>
                            <Text numberOfLines={1} style={styles.messageText}>{DATA.lastMessage}</Text>
                        </View>
                    </View>
                    <View style={styles.rightContainer}>
                        <View style={styles.messageTimeContainer}>
                            <Text style={styles.messageTimeText}>{lastMessageTime}</Text>
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