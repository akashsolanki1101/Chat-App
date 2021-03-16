import  React,{useEffect,useState} from 'react'

import {View,Text,FlatList, ActivityIndicator,TouchableOpacity} from 'react-native'
import EmojiInput from 'react-native-emoji-input'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {useSelector} from 'react-redux'

import {API,graphqlOperation,Auth} from 'aws-amplify'
import {messagesByChatRoom} from '../../graphql/queries'
import {onCreateMessage} from '../../graphql/subscriptions'

import {useStyles} from './styles'
import {useTheme} from '../../hooks/themeProvider/themeProvider'
import {Avatar} from '../../components/uiElements/avatar/avatar'
import {ButtonWrapper} from '../../components/uiElements/buttonWrapper/buttonWrapper'
import {RecievedMessageCard} from '../../components/uiElements/cards/recievedMessageCard/recievedMessageCard'
import {SentMessageCard} from '../../components/uiElements/cards/sentMessageCard/sentMessageCard'
import {MessageInputBox} from '../../components/uiElements/messageInputBox/messageInputBox'


export const ChatPage = ({navigation,route})=>{
    const styles = useStyles()
    const theme = useTheme()

    const [messages,setMessages] = useState([])

    const myUserID = useSelector(store=>store.userInfo.id)
    const [nextToken,setNextToken] = useState("")
    const [message,setMessage] = useState("")
    const [activeSendButton,setActiveSendButton] = useState(false)
    const [showMessageInputSpinner,setShowMessageInputSpinner] = useState(false)
    const [showSendButton,setShowSendButton]  = useState(true)
    const [showDataLoadingSpinner,setShowDataLoadingSpinner] = useState(true)
    const [showEmojiInput,setShowEmojiInput] = useState(false)

    const user = route.params.user

    const handleOnBackButtonClick = ()=>{
        navigation.pop()
    }

    const handleOnInputChange = (message:string)=>{
        const _message = message.trim()
        if(_message.length>0){
            setActiveSendButton(true)
        }else{
            setActiveSendButton(false)
        }
        setMessage(message)
    }

    const handleActiveSendButton = (val:boolean)=>{
        setActiveSendButton(val)
    }

    const handleShowSpinner = (val:boolean)=>{
        setShowMessageInputSpinner(val)
    }

    const handleShowSendButton = (val:boolean)=>{
        setShowSendButton(val)
    }

    const handleEmojiInputButtonClick = (val:boolean)=>{
        setShowEmojiInput(val)
    }

    const handleOnEmojiClick = (val:object)=>{        
        handleOnInputChange(message + val.char)   
    }

    const handleBackSpaceButtonClick = ()=>{
        handleOnInputChange(message.slice(0,-1))
    }

    

    const backSpaceButton = (
        <TouchableOpacity
            onPress={handleBackSpaceButtonClick}
        >
            <MaterialCommunityIcons name="backspace-outline" size={22} color={theme.theme.primaryTextColor} />
        </TouchableOpacity>
    )

    const fetchMoreMessages = async()=>{
        if(!nextToken){
            return
        }

        try{
            const messages = await API.graphql(graphqlOperation(messagesByChatRoom,{
                chatRoomID:user.chatRoomID,
                sortDirection:"DESC",
                limit:20,
                nextToken:nextToken
            }))

            setNextToken(messages.data.messagesByChatRoom.nextToken)
            setMessages(prevState=>{
                const oldMessages = [...prevState]
                const updatedMessages = [...oldMessages,...messages.data.messagesByChatRoom.items]
                return updatedMessages
            })

        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        const fetchMessages = async ()=>{
            try{
                const messages = await API.graphql(graphqlOperation(messagesByChatRoom,{
                    chatRoomID:user.chatRoomID,
                    sortDirection:"DESC",
                    limit:50,
                }))
                
                setNextToken(messages.data.messagesByChatRoom.nextToken)
                setShowDataLoadingSpinner(false)
                setMessages(messages.data.messagesByChatRoom.items)

            }catch(err){
                console.log(err);
            }
        }

        fetchMessages()
    },[])

    useEffect(()=>{
        const subscription  = API.graphql(
            graphqlOperation(onCreateMessage)
        ).subscribe({
            next:(data)=>{
                const newMessage = data.value.data.onCreateMessage

                if(newMessage){
                    if(newMessage.chatRoomID!==user.chatRoomID){
                        console.log("Message in diff chat room");
                        return
                    }
    
                    setMessages(prevState=>{
                        const oldMessages = [...prevState]
                        const updatedMessages = [newMessage,...oldMessages]
                        return updatedMessages
                    }) 
                    
                    setMessage("")
                    handleActiveSendButton(false)
                    handleShowSpinner(false)
                    handleShowSendButton(true)
                }

            }
        })
        return ()=>subscription.unsubscribe()
    },[])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.leftContainer}>
                    <ButtonWrapper 
                        onClick = {handleOnBackButtonClick}
                        style={{marginRight:5}}
                    >
                        <AntDesign name="left" size={24} style={styles.backButton}/>
                    </ButtonWrapper>
                    <View style={styles.userInfoContainer}>
                        <Avatar imgSrc={user.imageUri} style={styles.avatar} />
                        <View style={styles.senderNameContainer}>
                            <Text style={styles.senderNameText}>
                                {user.name}
                            </Text>
                        </View>
                    </View>
                </View>
                <ButtonWrapper
                    style={{}}
                    onClick={()=>{}}
                >
                    <Entypo name="dots-three-vertical" size={22} style={styles.menuButton} />
                </ButtonWrapper>
            </View>
            {
                showDataLoadingSpinner&&
                <View style={styles.dataLoadingSpinnerContainer}>
                    <ButtonWrapper
                        onClick={()=>{}}
                        style={styles.dataLoadingSpinner}
                    >
                        <ActivityIndicator
                            size={25}
                            color={theme.theme.activeColor}
                        />
                    </ButtonWrapper>
                </View>
            }
            {
                !showDataLoadingSpinner&&
                <View style={styles.messageList}>
                    <FlatList
                        data={messages}
                        keyExtractor={item=>item.id}
                        renderItem={({item})=>{                            
                            if(item.userID===myUserID){
                                return(
                                    <SentMessageCard
                                        message={item.content}
                                        createdAt={item.createdAt}
                                    />
                                )
                            }else{
                                return(
                                    <RecievedMessageCard
                                        message={item.content}
                                        createdAt={item.createdAt}
                                    />   
                                )
                            }
                        }}
                        onEndReachedThreshold={0.1}
                        onEndReached={fetchMoreMessages}
                        inverted
                    />
                </View>
            }
            <MessageInputBox
                chatRoomID = {user.chatRoomID}
                message={message}
                activeSendButton={activeSendButton}
                showSendButton={showSendButton}
                showSpinner={showMessageInputSpinner}
                showEmojiInput={showEmojiInput}
                handleOnInputChange={handleOnInputChange}
                handleActiveSendButton={handleActiveSendButton}
                handleShowSendButton={handleShowSendButton}
                handleShowSpinner={handleShowSpinner}
                handleEmojiInputButtonClick={handleEmojiInputButtonClick}

            />
            {
                showEmojiInput&&
                <EmojiInput
                    enableSearch={false}
                    emojiFontSize={25}
                    numColumns={7}
                    categoryLabelHeight={40}
                    backSpaceButton={backSpaceButton}
                    categoryHighlightColor={theme.theme.activeColor}
                    categoryLabelTextStyle={{
                        fontSize:16,
                        color:theme.theme.primaryTextColor
                    }}
                    keyboardBackgroundColor={theme.theme.backgroundColor}
                    categoryTabStyle={{
                        backgroundColor:theme.theme.backgroundColor,
                        elevation:5,
                    }}
                    bottomControlTabStyle={{
                        backgroundColor:theme.theme.backgroundColor,
                    }}
                    onEmojiSelected={handleOnEmojiClick}
                />
            }
        </View>
    )
}