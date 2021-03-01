import  React,{useEffect,useState} from 'react'

import {View,Text,ScrollView,FlatList} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

import {API,graphqlOperation,Auth} from 'aws-amplify'

import {messagesByChatRoom} from '../../graphql/queries'

import {useStyles} from './styles'
import {Avatar} from '../../components/uiElements/avatar/avatar'
import {ButtonWrapper} from '../../components/uiElements/buttonWrapper/buttonWrapper'
import {RecievedMessageCard} from '../../components/uiElements/cards/recievedMessageCard/recievedMessageCard'
import { SentMessageCard } from '../../components/uiElements/cards/sentMessageCard/sentMessageCard'
import {MessageInputBox} from '../../components/uiElements/messageInputBox/messageInputBox'

export const ChatPage = ({navigation,route})=>{
    const styles = useStyles()
    const [messages,setMessages] = useState([])
    const [myUserID,setMyUserID] = useState("")

    const user = route.params.user

    const handleOnBackButtonClick = ()=>{
        navigation.pop()
    }

    useEffect(()=>{
        const fetchMessages = async ()=>{
            try{
                const userInfo = await Auth.currentAuthenticatedUser()
                setMyUserID(userInfo.attributes.sub)

                const messages = await API.graphql(graphqlOperation(messagesByChatRoom,{
                    chatRoomID:user.chatRoomID,
                    sortDirection:"DESC"
                }))

                setMessages(messages.data.messagesByChatRoom.items)
                
            }catch(err){
                console.log(err);
            }
        }

        fetchMessages()
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
                    inverted
                />
            </View>
            <MessageInputBox
                chatRoomID = {user.chatRoomID}
            />
        </View>
    )
}