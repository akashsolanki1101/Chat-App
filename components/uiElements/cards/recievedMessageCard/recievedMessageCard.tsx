import React from 'react'

import {View,Text} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Entypo from 'react-native-vector-icons/Entypo'

import {useStyles} from './styles'

export const RecievedMessageCard = ({message,createdAt})=>{
    const styles = useStyles()
    let cardRef: Swipeable | null= null

    let messageTime

    const formatAMPM = (date)=>{
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    const date = new Date(createdAt).toLocaleDateString()
    const todayDate = new Date().toLocaleDateString()

    const parts = date.split('/')
    const _lastMessageTime = parseInt(`${parts[2]}${parts[0]}${parts[1]}`)

    const parts1 = todayDate.split('/')
    const _todayDate = parseInt(`${parts1[2]}${parts1[0]}${parts1[1]}`)

    if((_todayDate - _lastMessageTime)===0)
    {
        messageTime= `Today, ${formatAMPM(new Date(createdAt))}`
    }else if((_todayDate - _lastMessageTime)===1){
        messageTime=`Yesterday, ${formatAMPM(new Date(createdAt))}`
    }else{
        messageTime=`${parts[1]}/${parts[0]}/${parts[2]}, ${formatAMPM(new Date(createdAt))}`
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

    return(
        <View style={styles.container}>
            <Swipeable
                ref={ref => cardRef = ref}
                onSwipeableLeftOpen={closeSwipeable}
                renderLeftActions={leftSwipe}
                childrenContainerStyle={styles.swipeableContainer}
            >
                <View style={styles.recievedMessageCardContainer}>
                    <View style={styles.recievedMessageCard}>
                        <Text style={styles.recievedMessageText}>{message}</Text>
                    </View>
                </View>
            </Swipeable>
            <View style={styles.messageTime}>
                <Text style={styles.messageTimeText}>{messageTime}</Text>
            </View>
        </View>
    )
}