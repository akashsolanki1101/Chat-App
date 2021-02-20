import  React from 'react'

import {View,Text} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

import {useStyles} from './styles'
import {Avatar} from '../avatar/avatar'
import {ButtonWrapper} from '../buttonWrapper/buttonWrapper'
import {RecievedMessageCard} from '../cards/recievedMessageCard/recievedMessageCard'
import { SentMessageCard } from '../cards/sentMessageCard/sentMessageCard'
import {MessageInputBox} from '../messageInputBox/messageInputBox'

export const ChatPage = ({navigation})=>{
    const styles = useStyles()

    const handleOnBackButtonClick = ()=>{
        navigation.pop()
    }

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
                        <Avatar imgSrc={require('../../assets/img/c.png')} style={styles.avatar} />
                        <View style={styles.senderNameContainer}>
                            <Text style={styles.senderNameText}>
                                Akash
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
                <SentMessageCard
                    message={"hello"}
                />
                <RecievedMessageCard
                    message={"Hi\nHow are you bro??"}
                />
                <SentMessageCard
                    message={"fine bro what about you and wife??"}
                />
                <RecievedMessageCard
                    message={"Same as you man..."}
                />
                <SentMessageCard
                    message={"fine bro what about you??"}
                />
            </View>
            <MessageInputBox/>
        </View>
    )
}