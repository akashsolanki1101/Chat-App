import React,{useState} from 'react'

import {View,Text,TouchableNativeFeedback,TextInput} from 'react-native'

import {useStyles} from './styles'
import {Header} from '../../components/uiElements/header/header'
import {BackDrop} from '../../components/uiElements/backdrop/backdrop'
import {ChatRoomLinkPopUp} from '../../components/uiElements/chatRoomLinkPopUp/chatRoomLinkPopUp'

export const CreateChatRoomPage = ({navigation={}})=>{
    const styles = useStyles()
    const [showLinkPopUp,setShowLinkPopUp] = useState(false)

    const toggleLinkPopUp = (val:boolean)=>{
        setShowLinkPopUp(val)
    }

    return(
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title={""}
            />
            <View style={styles.contentContainer}>
            <View style={styles.headingTextContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Create a chat room</Text>
                </View>
                <View style={styles.secondaryTextContainer}>
                    <Text style={styles.secondaryText}>Create a chat room and connect with your friends.</Text>
                </View>
            </View>
            <View style={styles.inputBoxContainer}>
                <View style={styles.inputBox}>
                    <Text style={styles.inputBoxText}>Chat room name</Text>
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
                            Create
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.orTextContainer}>
                <Text style={styles.orText}>or</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableNativeFeedback>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            Create a one-to-one room
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
            <BackDrop
                show={showLinkPopUp}
                close={()=>{toggleLinkPopUp(false)}}
            >
                <ChatRoomLinkPopUp
                    close={()=>{toggleLinkPopUp(false)}}
                />
            </BackDrop>
        </View>
    )
}