import React from 'react'

import {View,TouchableNativeFeedback} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {useStyles} from './styles'

export const ContactsButton = ({onClick})=>{
    const styles = useStyles()
    
    return(
        <View style={styles.container}>
                <TouchableNativeFeedback
                    onPress={onClick}
                >
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name="message-text-outline" size={24} style={styles.messageIcon} />
                    </View>
                </TouchableNativeFeedback>
        </View>
    )
}