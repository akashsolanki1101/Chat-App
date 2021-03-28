import React from 'react'

import {View,Text} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Entypo from 'react-native-vector-icons/Entypo'
import { TickMark } from '../../tickMark/tickMark'

import {useStyles} from './styles'
import {dateFormatter} from '../../../../utils/dateFormatter'
import { TaggedMessage } from '../../taggedMessage/taggedMessage'

export const SentMessageCard = ({message,createdAt,messageStatus,messageCreatorName,messageCreatorID,taggedMessageContent,taggedMessageSenderID,taggedMessageSenderName,handleSetTaggedMessage})=>{
    const styles = useStyles()
    let cardRef: Swipeable | null= null
    const messageTime = dateFormatter(createdAt)
    const _messageTime = messageTime[0]===''?`${messageTime[1]}`:`${messageTime[0]}, ${messageTime[1]}`
    const taggedMessageIsEmpty = taggedMessageSenderID===null?true:false

    let taggedMessageData = {}

    if(!taggedMessageIsEmpty){
        taggedMessageData={
            taggedMessageContent,
            taggedMessageSenderID,
            taggedMessageSenderName
        }
    }

    const leftSwipe = ()=>{
        return(
            <View style={styles.forwardIconContainer}>
                <Entypo name="forward" size={24} style={styles.forwardIcon} />
            </View>
        )
    }

    const closeSwipeable = ()=>{
        cardRef.close()
    }

    const setTaggedMessage = ()=>{
        const messageData = {
            taggedMessageContent:message,
            taggedMessageSenderID:messageCreatorID,
            taggedMessageSenderName:messageCreatorName
        }
        handleSetTaggedMessage(messageData)
        closeSwipeable()
    }

    return(
        <View style={styles.container}>
            
            <Swipeable
                ref={ref => cardRef = ref}
                onSwipeableLeftWillOpen={setTaggedMessage}
                renderLeftActions={leftSwipe}
                childrenContainerStyle={styles.swipeableContainer}                
            >
                <View style={styles.sentMessageCardContainer}>
                    <View style={styles.sentMessageCard}>
                        <TaggedMessage
                            taggedMessageData={taggedMessageData}
                            handleSetTaggedMessage={()=>{}}
                        />
                        <Text style={styles.sentMessageText}>{message}</Text>
                    </View>
                </View>
            </Swipeable>
            <View style={styles.messageTime}>
                <Text style={styles.messageTimeText}>{_messageTime}</Text>
                <TickMark
                    messageStatus={messageStatus}
                />
            </View>
        </View>
    )
}