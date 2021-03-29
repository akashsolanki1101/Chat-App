import React from 'react'

import {View,Text,TextInput,TouchableNativeFeedback} from 'react-native'

import {useStyles} from './styles'
import {Header} from '../../components/uiElements/header/header'

export const JoinChatRoomPage = ({navigation={}})=>{
    const styles = useStyles()

    return(
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title={""}
            />
            <View style={styles.contentContainer}>
                <View style={styles.headingTextContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Join a chat room</Text>
                    </View>
                    <View style={styles.secondaryTextContainer}>
                        <Text style={styles.secondaryText}>Enter an invite code below to join the room.</Text>
                    </View>
                </View>
                <View style={styles.inputBoxContainer}>
                    <View style={styles.inputBox}>
                        <Text style={styles.inputBoxText}>Invite code</Text>
                        <TextInput
                            style={styles.textInput}
                            autoFocus={true}
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableNativeFeedback>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Join    
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    )
}