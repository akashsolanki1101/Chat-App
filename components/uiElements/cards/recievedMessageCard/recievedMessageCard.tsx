import React from 'react'

import {View,Text} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Entypo from 'react-native-vector-icons/Entypo'

import {useStyles} from './styles'

export const RecievedMessageCard = ({message,createdAt})=>{
    const styles = useStyles()
    let cardRef: Swipeable | null= null

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
                <Text style={styles.messageTimeText}>Today, 10:00 am</Text>
            </View>
        </View>
    )
}