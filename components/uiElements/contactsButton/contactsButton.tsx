import React from 'react'

import {View,TouchableNativeFeedback} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import {useStyles} from './styles'

export const ContactsButton = ({onClick})=>{
    const styles = useStyles()
    
    return(
        <View style={styles.container}>
                <TouchableNativeFeedback
                    onPress={onClick}
                >
                    <View style={styles.iconContainer}>
                        <Feather name="plus" size={25} style={styles.addIcon} />
                    </View>
                </TouchableNativeFeedback>
        </View>
    )
}