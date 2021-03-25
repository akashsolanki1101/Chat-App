import React,{useState,useEffect, useCallback} from 'react'

import {View,Text,TouchableNativeFeedback,TouchableOpacity} from 'react-native'
import {useSelector} from 'react-redux'

import {API,graphqlOperation} from 'aws-amplify'
import {messagesByChatRoom} from '../../../../graphql/queries'
import {onCreateMessage} from '../../../../graphql/subscriptions'


import {Avatar} from '../../avatar/avatar'
import { Badge } from '../../badge/badge'
import {useStyles} from './styles'
import {dateFormatter} from '../../../../utils/dateFormatter'
import { TickMark } from '../../tickMark/tickMark'

export const ChatCard = ({data,navigation,onAvatarClick,handleCloseDropDown})=>{
    const styles = useStyles()
    const myInfo = useSelector(store=>store.userInfo)
    const myUserID = myInfo.id
    const [lastMessage,setLastMessage] = useState(data.chatRoom.lastMessage)
    const [unreadMessagesCount,setUnreadMessagesCount] = useState(0)
    
    let DATA = {}
    const lastMessageTime = dateFormatter(lastMessage.createdAt)
    const _lastMessageTime = lastMessageTime[0]===''?lastMessageTime[1]:lastMessageTime[0];
            

    if(data){
        DATA = {
            userID:data.chatRoom.chatRoomUsers.items[0].user.id,
            name:data.chatRoom.chatRoomUsers.items[0].user.name,
            imageUri:data.chatRoom.chatRoomUsers.items[0].user.imageUri,
            online:data.chatRoom.chatRoomUsers.items[0].user.online,
            chatRoomID:data.chatRoomID,
        }          
    }

    const handleOnClickChatCard = ()=>{
        handleCloseDropDown()
        navigation.navigate("ChatPage",{
            user:DATA
        })
    }

    const fetchUnreadMessages = useCallback(async()=>{
        try{
            const res = await API.graphql(graphqlOperation(messagesByChatRoom,{
                filter: {
                    userID: {
                            eq: DATA.userID
                        }, 
                        and: {
                            messageStatus: {
                                eq: "sent"
                            }
                        }
                    },
                chatRoomID:DATA.chatRoomID,
            }))

            setUnreadMessagesCount(res.data.messagesByChatRoom.items.length)            
        }catch(err){   
            console.log(err);
        }
    },[])



    useEffect(()=>{        
        const subscription  = API.graphql(
            graphqlOperation(onCreateMessage)
        ).subscribe({
            next:(data)=>{
                // console.log(data);
                
                const newMessage = data.value.data.onCreateMessage
                
                if(newMessage){
                    if(newMessage.chatRoomID!==DATA.chatRoomID){
                        return
                    }
                }
                setLastMessage(newMessage)

            }
        })
        return ()=>subscription.unsubscribe()
    },[])

    useEffect(()=>{
        fetchUnreadMessages()
    },[fetchUnreadMessages])



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
                        onPress={()=>onAvatarClick(data.chatRoom.chatRoomUsers.items[0])}
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
                            {
                                (myUserID===lastMessage.userID)&&
                                <TickMark
                                    messageStatus={lastMessage.messageStatus}
                                />
                            }
                            <Text numberOfLines={1} style={styles.messageText}>{lastMessage.content}</Text>
                        </View>
                    </View>
                    <View style={styles.rightContainer}>
                        <View style={styles.messageTimeContainer}>
                            <Text style={styles.messageTimeText}>{_lastMessageTime}</Text>
                        </View>
                        <View style={styles.badgeContainer}>
                            <Badge
                                value={unreadMessagesCount}
                            />
                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}