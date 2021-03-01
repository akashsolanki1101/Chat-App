import React,{useEffect,useState} from 'react'

import {View,TextInput} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {API,Auth,graphqlOperation} from 'aws-amplify'
import {createMessage,updateChatRoom} from '../../../graphql/mutations'

import {useStyles} from './styles'
import {useTheme} from '../../../hooks/themeProvider/themeProvider'
import {ButtonWrapper} from '../buttonWrapper/buttonWrapper'

export const MessageInputBox = ({chatRoomID})=>{
    const styles = useStyles()
    const theme = useTheme()

    const [myUserID,setMyUserID] = useState("")
    const [message,setMessage] = useState("")
    const [activeSendButton,setActiveSendButton] = useState(false)

    const handleOnInputChange = (message:string)=>{
        const _message = message.trim()
        if(_message.length>0){
            setActiveSendButton(true)
        }else{
            setActiveSendButton(false)
        }
        setMessage(message)
    }

    const updateChatRoomLastMessage = async (messageID:string)=>{
        try{
            
        }catch(err){
            console.log(err);
        }
    }

    const handleOnSendButtonClick = async ()=>{
        const _message = message.trim()
        if(_message.length<=0){
            return
        }

        try{
            const lastMessageInfo = await API.graphql(graphqlOperation(
                createMessage,{
                    input:{
                        content:_message,
                        userID:myUserID,
                        chatRoomID:chatRoomID,
                    }
                }
            ))

            console.log(lastMessageInfo.data.createMessage.id);
            

            setMessage("")
            setActiveSendButton(false)
        }catch(err){
            console.log(err);
        }
        
    }

    useEffect(()=>{
        const fetchUserInfo =  async ()=>{
            try{
                const userInfo = await Auth.currentAuthenticatedUser()
                setMyUserID(userInfo.attributes.sub)
            }catch(err){
                console.log(err);
            }
        }
        fetchUserInfo()
    },[])

    return(
        <View style={styles.container}>
            <View style={styles.messageBoxContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={message}
                        multiline={true}
                        onChangeText={handleOnInputChange}
                        style={styles.textInput}
                        placeholder="Type your message..."
                        placeholderTextColor={theme.theme.primaryTextColor}
                    />
                </View>
                <ButtonWrapper
                    style={{}}
                    onClick={handleOnSendButtonClick}
                >
                    <Ionicons name="md-send" size={25} style={{...styles.sendButton,...activeSendButton?styles.activeSendButton:{}}} />
                </ButtonWrapper>
            </View>
        </View>
    )
}
