import React,{useState,useEffect, useCallback} from 'react'

import {View,Text,TouchableNativeFeedback,TouchableOpacity} from 'react-native'
import {useSelector} from 'react-redux'

import {API,graphqlOperation} from 'aws-amplify'
import {onCreateMessage,onUpdateMessage} from '../../../../graphql/subscriptions'
import {getUnreadMessagesByChatRoom} from '../../../../modifiedQueries/modifiedQueries'

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
    let lastMessageTime = []
    let _lastMessageTime = ""

    if(lastMessage){
        lastMessageTime = dateFormatter(lastMessage.createdAt)
        _lastMessageTime = lastMessageTime[0]===''?lastMessageTime[1]:lastMessageTime[0];    
    }

            
    if(data){
        let oppositeUser
        const usersList = data.chatRoom.chatRoomUsers.items

        if(usersList[0].user.id!==myUserID){
            oppositeUser=usersList[0].user
        }else if(usersList[1]&&(usersList[1].user.id!==myUserID)){
            oppositeUser=usersList[1].user
        }else{
            oppositeUser=usersList[0].user
        }

        DATA = {
            userID:oppositeUser.id,
            name:oppositeUser.name,
            imageUri:oppositeUser.imageUri,
            status:oppositeUser.status,
            online:oppositeUser.online,
            chatRoomID:data.chatRoomID,
        }          
    }

    const handleOnClickChatCard = ()=>{
        handleCloseDropDown()
        navigation.navigate("ChatPage",{
            user:DATA
        })
    }

    const fetchUnreadMessages = useCallback(async(id:string)=>{
        try{
            const res = await API.graphql(graphqlOperation(getUnreadMessagesByChatRoom,{
                chatRoomID:DATA.chatRoomID,
                filter: {messageStatus: {eq: "sent"}, and: {userID: {ne: id}}},
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
                const newMessage = data.value.data.onCreateMessage
                
                if(newMessage){
                    if(newMessage.chatRoomID!==DATA.chatRoomID){
                        return
                    }
                }
                setLastMessage(newMessage)
                fetchUnreadMessages(myUserID)
            }
        })
        return ()=>subscription.unsubscribe()
    },[])

    useEffect(()=>{
        const subscription = API.graphql(
            graphqlOperation(onUpdateMessage)
        ).subscribe({
            next:(data)=>{
                const updatedMessage = data.value.data.onUpdateMessage

                if(updatedMessage){
                    if(updatedMessage.chatRoomID===DATA.chatRoomID){
                        if(updatedMessage.id===lastMessage.id){
                            setLastMessage(updatedMessage)
                        }
                        fetchUnreadMessages(myUserID)
                    }
                }
            }
        })

        return ()=>subscription.unsubscribe()
    },[])

    useEffect(()=>{
        if(myUserID){
            fetchUnreadMessages(myUserID)
        }
    },[myUserID,fetchUnreadMessages])



    return(
        <View style={styles.container}>
            <TouchableNativeFeedback
                onPress={handleOnClickChatCard}
                onLongPress={()=>{}}
            >
                <View style={styles.card}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        onPress={()=>onAvatarClick(DATA)}
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
                                (lastMessage&&(myUserID===lastMessage.userID))&&
                                <TickMark
                                    messageStatus={lastMessage.messageStatus}
                                />
                            }
                            <Text numberOfLines={1} style={styles.messageText}>{lastMessage?lastMessage.content:" "}</Text>
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