import React from 'react'

import {View,Text,TouchableNativeFeedback} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import {useStyles} from './styles'

export const ConnectionOptions = ({navigation,close})=>{
    const styles = useStyles()

    const handleNavigationOnOptionClick = (val:string)=>{
        close()
        navigation.navigate(val)
    }

    return(
        <View style={styles.container}>
            <TouchableNativeFeedback
                onPress={()=>{handleNavigationOnOptionClick("CreateChatRoomPage")}}
            >
                <View style={styles.option}>
                    <View>
                        <Text style={styles.primaryText}>Create a chat room</Text>
                        <Text style={styles.secondaryText}>Make a chat room and connect with your friends.</Text>
                    </View>
                    <View style={styles.enterIconContainer}>
                        <AntDesign name="right" size={20} style={styles.enterIcon} />                       
                    </View>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
                onPress={()=>{handleNavigationOnOptionClick("JoinChatRoomPage")}}
            >
                <View style={styles.option}>
                    <View>
                        <Text style={styles.primaryText}>Join a chat room</Text>
                        <Text style={styles.secondaryText}>Use the invite code to join.</Text>
                    </View>
                    <View style={styles.enterIconContainer}>
                        <AntDesign name="right" size={20} style={styles.enterIcon} />
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}