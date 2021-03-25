import React,{useEffect,useState} from 'react'

import {View,TextInput,ActivityIndicator,Keyboard,Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {useSelector} from 'react-redux'

import {API,graphqlOperation} from 'aws-amplify'
import {createMessage,updateChatRoom} from '../../../graphql/mutations'

import {useStyles} from './styles'
import {useTheme} from '../../../hooks/themeProvider/themeProvider'
import {ButtonWrapper} from '../buttonWrapper/buttonWrapper'
import {TaggedMessage} from '../taggedMessage/taggedMessage'

export const MessageInputBox = ({chatRoomID,message,activeSendButton,showEmojiInput,showSendButton,showSpinner,handleOnInputChange,handleActiveSendButton,handleShowSendButton,handleShowSpinner,handleEmojiInputButtonClick,taggedMessageData,handleSetTaggedMessage})=>{
    const styles = useStyles()
    const theme = useTheme()
    const myUserID = useSelector(store=>store.userInfo.id)
    const taggedMessageIsEmpty = Object.keys(taggedMessageData).length===0?true:false

    const updateChatRoomLastMessage = async (messageID:string)=>{
        try{
            await API.graphql(graphqlOperation(
                updateChatRoom,
                {
                    input:{
                        id:chatRoomID,
                        lastMessageID:messageID
                    }
                }
            ))
        }catch(err){
            console.log(err);
        }
    }

    const handleOnSendButtonClick = async ()=>{
        const _message = message.trim()
        if(_message.length<=0){
            return
        }

        handleShowSendButton(false)
        handleShowSpinner(true)

        try{
            let messageData = {}
            if(taggedMessageIsEmpty){
                messageData = {
                    content:_message,
                    userID:myUserID,
                    chatRoomID:chatRoomID,
                    messageStatus:'sent'
                }
            }else{
                messageData = {
                    content:_message,
                    userID:myUserID,
                    chatRoomID:chatRoomID,
                    messageStatus:'sent',
                    taggedMessageContent:taggedMessageData.taggedMessageContent,
                    taggedMessageSenderName:taggedMessageData.taggedMessageSenderName,
                    taggedMessageSenderID:taggedMessageData.taggedMessageSenderID
                }
            }

            const lastMessageInfo = await API.graphql(graphqlOperation(
                createMessage,{
                    input:messageData
                }
            ))
            
            await updateChatRoomLastMessage(lastMessageInfo.data.createMessage.id)        
            
        }catch(err){
            console.log(err);
        }
        
    }

    
    return(
        <View style={styles.container}>
            <View style={styles.messageBoxContainer}>
                <TaggedMessage
                    handleSetTaggedMessage={handleSetTaggedMessage}
                    taggedMessageData={taggedMessageData}
                    showCancelButton={true}
                />
                <View style={styles.bottomContainer}>
                    <ButtonWrapper 
                        show={!showEmojiInput}
                        onClick={()=>{
                            Keyboard.dismiss()
                            handleEmojiInputButtonClick(true)
                        }}
                        style={{}}
                    >
                        <FontAwesome5 name="smile" size={24} color={theme.theme.primaryTextColor} />
                    </ButtonWrapper>
                    <ButtonWrapper
                        show={showEmojiInput}
                        onClick={()=>{
                            handleEmojiInputButtonClick(false)
                        }}
                        style={{}}
                    >
                        <MaterialIcons name="keyboard-arrow-down" size={30} color={theme.theme.primaryTextColor} />
                    </ButtonWrapper>
                    <View style={styles.inputContainer}>
                        <TextInput
                            onTouchStart={()=>handleEmojiInputButtonClick(false)}
                            value={message}
                            multiline={true}
                            onChangeText={handleOnInputChange}
                            style={styles.textInput}
                            placeholderTextColor={theme.theme.primaryTextColor}
                            placeholder="Type your message..."
                        />
                    </View>
                    <ButtonWrapper
                    show={showSendButton}
                        style={{}}
                        onClick={handleOnSendButtonClick}
                    >
                        <Ionicons name="md-send" size={25} style={{...styles.sendButton,...activeSendButton?styles.activeSendButton:{}}} />
                    </ButtonWrapper>
                    <ButtonWrapper
                        show={showSpinner}
                        style={{}}
                        onClick={()=>{}}
                    >
                        <ActivityIndicator
                            color={theme.theme.primaryTextColor}
                            size={25}
                        />
                    </ButtonWrapper>
                </View>
            </View>
        </View>
    )
}
