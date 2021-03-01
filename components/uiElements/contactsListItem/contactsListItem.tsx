import React from 'react'

import {View,Text,TouchableNativeFeedback} from 'react-native'
import { Avatar } from '../avatar/avatar'

import {API,graphqlOperation,Auth} from 'aws-amplify'
import {createChatRoom,createChatRoomUser} from '../../../graphql/mutations'

import {useStyles} from './styles'

export const ContactsListItem = ({user,navigation})=>{
    const styles = useStyles()

    const handleOnClickUser = async ()=>{

        try{
        //1. create new chat room
            const newChatRoomData = await API.graphql(graphqlOperation(createChatRoom,{
                input :{
                    lastMessageID:"2f643bc3-d83f-47fe-b1fe-395f1b5daf12"
                }
            }))

            if(!newChatRoomData.data){
                console.log("Can't create chat room");
                return                
            }

            
        //2. add the clicked user in the chatroom
            const chatRoomID = newChatRoomData.data.createChatRoom.id

            const res = await API.graphql(graphqlOperation(createChatRoomUser,{
                input:{
                    userID:user.id,
                    chatRoomID:chatRoomID
                }
            }))

            console.log("Res: ",res);
            

        //3. add me to the chatroom

            const loggedUserInfo = await Auth.currentAuthenticatedUser()
            const loggedUserID = loggedUserInfo.attributes.sub
            
            const res1 = await API.graphql(graphqlOperation(createChatRoomUser,{
                input:{
                    userID:loggedUserID,
                    chatRoomID:chatRoomID
                }
            }))

            console.log("Res1: ",res1);

            navigation.navigate("ChatPage",{
                user:user,
                id:chatRoomID
            })
                        
        }catch(err){
            console.log(err);
            
        }
    }

    return(
        <TouchableNativeFeedback
            onPress={handleOnClickUser}
        >
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Avatar
                        imgSrc={user.imageUri}
                        style={styles.avatar}
                    />
                </View>
                <View style={styles.userInfoContainer}>
                    <View style={styles.nameContainer}>
                        <Text numberOfLines={1} style={styles.nameText}>{user.name}</Text>
                    </View>

                    <View style={styles.statusContainer}>
                        <Text numberOfLines={1} style={styles.statusText}>{user.status}</Text>
                    </View>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}