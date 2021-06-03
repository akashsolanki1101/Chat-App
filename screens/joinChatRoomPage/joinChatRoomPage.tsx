import React, { useState } from 'react'

import {View,Text,TextInput,TouchableNativeFeedback,ToastAndroid,Keyboard} from 'react-native'
import {useSelector} from 'react-redux'

import {API,graphqlOperation} from 'aws-amplify'
import {getChatRoom} from '../../graphql/queries'
import {createChatRoomUser} from '../../graphql/mutations'

import {useStyles} from './styles'
import {Header} from '../../components/uiElements/header/header'
import {ErrorBox} from '../../components/uiElements/errBox/errBox'
import {Loader} from '../../components/uiElements/loader/loader'
import { BackDrop } from '../../components/uiElements/backdrop/backdrop'

type Props = {
    navigation : object
}

export const JoinChatRoomPage = ({navigation}:Props)=>{
    const styles = useStyles()
    const [chatRoomID,setChatRoomID] = useState("")
    const [showErrBox,setShowErrBox] = useState(false)
    const [errMessage,setErrMessage]  = useState("")
    const [showLoader,setShowLoader] = useState(false)
    const [loaderMessage,setLoaderMessage]  = useState("")

    const myUserID = useSelector(store=>store.userInfo.id)    

    const onInputChange = (val:string)=>{
        setChatRoomID(val)
    }

    const joinChatRoom = async()=>{
        const _chatRoomID = chatRoomID.trim()

        if(_chatRoomID.length===0){
            ToastAndroid.showWithGravity("Chat room id can't be empty.",ToastAndroid.SHORT,ToastAndroid.CENTER)
            return
        }
        Keyboard.dismiss()
        setLoaderMessage("Adding you in the chat room.")
        setShowLoader(true)
        try{
            const chatRoomData = await API.graphql(graphqlOperation(getChatRoom,{
                id:chatRoomID
            }))

            if(chatRoomData.data.getChatRoom){
                let chatRoomUsers = []
                const isGroup = chatRoomData.data.getChatRoom.group
                const usersCount = chatRoomData.data.getChatRoom.chatRoomUsers.items.length
                chatRoomUsers = chatRoomData.data.getChatRoom.chatRoomUsers.items 

                for(let i in  chatRoomUsers){
                    if(myUserID == chatRoomUsers[i].userID){
                        setShowLoader(false)
                        setErrMessage("User already exist in the room.")
                        setShowErrBox(true)
                        return
                    }
                }
    
                if(isGroup){
                    await API.graphql(graphqlOperation(createChatRoomUser,{
                        input:{
                            chatRoomID:chatRoomID,
                            userID:myUserID
                        }
                    }))
                }else{
                    if(usersCount<2){
                        await API.graphql(graphqlOperation(createChatRoomUser,{
                            input:{
                                chatRoomID:chatRoomID,
                                userID:myUserID
                            }
                        }))
                        ToastAndroid.showWithGravity("Refresh to see new chat room",ToastAndroid.SHORT, ToastAndroid.CENTER)
                    }else{
                        setShowLoader(false)
                        setErrMessage("Sorry, you can't join this room.")
                        setShowErrBox(true)
                    }
                }
                setShowLoader(false)
            }else{
                setShowLoader(false)
                setErrMessage("Invalid chat room id. No such chat room exist.")
                setShowErrBox(true)
            }
        }
        catch(err){
            setShowLoader(false)
            console.log(err);
        }
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
                            value={chatRoomID}
                            onChangeText={onInputChange}
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableNativeFeedback
                        onPress={joinChatRoom}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Join    
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <BackDrop
                close={()=>{}}
                show={showLoader}
            >
                <Loader
                    message={loaderMessage}
                />
            </BackDrop>
            <BackDrop
                close={()=>{setShowErrBox(false)}}
                show={showErrBox}
            >
                <ErrorBox
                    closeDialogBox={()=>{setShowErrBox(false)}}
                    message={errMessage}
                />

            </BackDrop>
        </View>
    )
}