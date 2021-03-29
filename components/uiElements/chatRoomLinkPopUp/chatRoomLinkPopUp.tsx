import React from 'react'

import {View,Text,TouchableNativeFeedback} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {useStyles} from './styles'
import {ButtonWrapper} from '../buttonWrapper/buttonWrapper'

export const ChatRoomLinkPopUp = ({close})=>{
    const styles = useStyles()

    return(
        <View style={styles.container}>
            <View style={styles.popUpContainer}>
                <View style={styles.header}>
                    <Text style={styles.titleText}>Chat room ID</Text>
                    <ButtonWrapper
                        onClick={close}
                        style={{}}
                        >
                        <Ionicons name="md-close" size={24} style={styles.closeIcon} />
                    </ButtonWrapper>
                </View>
                <View style={styles.idContainer}>
                    <View style={styles.idTextContainer}>
                        <Text numberOfLines={1} style={styles.idText}>7ui94-ua15-13ar-45sw-13ar-45sw</Text>
                    </View>
                    <ButtonWrapper
                        style={{}}
                        onClick={()=>{}}
                    >
                        <MaterialCommunityIcons name="content-copy" size={22} style={styles.copyIcon} />
                    </ButtonWrapper>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableNativeFeedback>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Share</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    )
}