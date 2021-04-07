import React,{useState} from 'react'

import {View,Text,TouchableNativeFeedback,TextInput,ToastAndroid,Keyboard} from 'react-native'
import {useSelector} from 'react-redux'

import {API,graphqlOperation} from 'aws-amplify'
import {createChatRoom,createChatRoomUser} from '../../graphql/mutations'

import {useStyles} from './styles'
import {Header} from '../../components/uiElements/header/header'
import {BackDrop} from '../../components/uiElements/backdrop/backdrop'
import {ChatRoomLinkPopUp} from '../../components/uiElements/chatRoomLinkPopUp/chatRoomLinkPopUp'
import {Loader} from '../../components/uiElements/loader/loader'

export const CreateChatRoomPage = ({navigation={}})=>{
    const styles = useStyles()
    const [showLinkPopUp,setShowLinkPopUp] = useState(true)
    const [chatRoomID,setChatRoomID] = useState("")
    const [groupName,setGroupName] = useState("")
    const [loaderMessage,setLoaderMessage] = useState("")
    const [showLoader,setShowLoader] = useState(false)
    
    const myUserID = useSelector(store=>store.userInfo.id)    

    const toggleLinkPopUp = (val:boolean)=>{
        setShowLinkPopUp(val)
    }

    const toggleLoader = (val:boolean)=>{
        setShowLoader(val)
    }

    const onInputChange = (val:string)=>{
        setGroupName(val)
    }

    const createGroupChatRoom = async ()=>{
        ToastAndroid.showWithGravity("Working on it, get back to you soon.",ToastAndroid.SHORT,ToastAndroid.CENTER)
        return

        // const _chatRoomName = groupName.trim()
        
        // if(_chatRoomName.length===0){
        //     ToastAndroid.showWithGravity("Chat room name can't be empty.",ToastAndroid.SHORT,ToastAndroid.CENTER)
        // }

        // Keyboard.dismiss()

        // setLoaderMessage(`Creating ${groupName}...`)
        // toggleLoader(true)

        // try{
        //     const newChatRoom = await API.graphql(graphqlOperation(createChatRoom,{
        //         input:{
        //             group:true,
        //             groupName:groupName,
        //             lastMessageID:'f33f4fff-7a46-4a8c-a00b-66d258554d98',
        //         }
        //     }))

        //     const newChatRoomID = newChatRoom.data.createChatRoom.id
        //     setChatRoomID(newChatRoomID)

        //     await API.graphql(graphqlOperation(createChatRoomUser,{
        //         input:{
        //             userID:myUserID,
        //             chatRoomID:newChatRoomID
        //         }
        //     }))
        //     toggleLoader(false)
        //     setShowLinkPopUp(true)

        // }catch(err){
        //     toggleLoader(false)
        //     console.log(err);
        // }
    }

    const createOnetoOneChatRoom =async ()=>{
        Keyboard.dismiss()
        
        setLoaderMessage("Creating room...")
        toggleLoader(true)
        try{
            const newChatRoom = await API.graphql(graphqlOperation(createChatRoom,{
                input:{
                    group:false,
                    lastMessageID:'f33f4fff-7a46-4a8c-a00b-66d258554d98',
                }
            }))

            const newChatRoomID = newChatRoom.data.createChatRoom.id
            setChatRoomID(newChatRoomID)

            await API.graphql(graphqlOperation(createChatRoomUser,{
                input:{
                    userID:myUserID,
                    chatRoomID:newChatRoomID
                }
            }))

            toggleLoader(false)
            setShowLinkPopUp(true)

        }catch(err){
            toggleLoader(false)
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
                            value={groupName}
                            onChangeText={onInputChange}
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableNativeFeedback
                        onPress={createGroupChatRoom}
                    >
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
                    <TouchableNativeFeedback
                        onPress={createOnetoOneChatRoom}
                    >
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
                    id={chatRoomID}
                />
            </BackDrop>
            <BackDrop
                close={()=>{}}
                show={showLoader}
            >
                <Loader
                    message={loaderMessage}
                />
            </BackDrop>
        </View>
    )
}