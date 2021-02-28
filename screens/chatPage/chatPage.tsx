import  React from 'react'

import {View,Text,ScrollView} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

import {useStyles} from './styles'
import {Avatar} from '../../components/uiElements/avatar/avatar'
import {ButtonWrapper} from '../../components/uiElements/buttonWrapper/buttonWrapper'
import {RecievedMessageCard} from '../../components/uiElements/cards/recievedMessageCard/recievedMessageCard'
import { SentMessageCard } from '../../components/uiElements/cards/sentMessageCard/sentMessageCard'
import {MessageInputBox} from '../../components/uiElements/messageInputBox/messageInputBox'

export const ChatPage = ({navigation,route})=>{
    const styles = useStyles()

    const user = route.params.user

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
                <ScrollView
                    
                >
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
                    <RecievedMessageCard
                        message={"Same as you man..."}
                    />
                    <SentMessageCard
                        message={"fine bro what about you??"}
                    />

                </ScrollView>
            </View>
            <MessageInputBox/>
        </View>
    )
}