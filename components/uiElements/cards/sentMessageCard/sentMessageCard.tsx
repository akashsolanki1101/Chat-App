import React from 'react'

import {View,Text} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Entypo from 'react-native-vector-icons/Entypo'
import { TickMark } from '../../tickMark/tickMark'

import {useStyles} from './styles'

export const SentMessageCard = ({message,createdAt})=>{
    const styles = useStyles()
    let cardRef: Swipeable | null= null

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

    const time = new Date(createdAt).toLocaleTimeString()


    console.log("Time",time,formatAMPM(new Date(createdAt)));


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
                <View style={styles.sentMessageCardContainer}>
                    <View style={styles.sentMessageCard}>
                        <Text style={styles.sentMessageText}>{message}</Text>
                    </View>
                </View>
            </Swipeable>
            <View style={styles.messageTime}>
                <Text style={styles.messageTimeText}>Today, 10:00 am</Text>
                <TickMark/>
            </View>
        </View>
    )
}