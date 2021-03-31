import React from 'react'

import {View,Text,TouchableNativeFeedback,Share,ToastAndroid} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Clipboard from '@react-native-community/clipboard'

import {useStyles} from './styles'
import {ButtonWrapper} from '../buttonWrapper/buttonWrapper'

export const ChatRoomLinkPopUp = ({id="",close})=>{
    const styles = useStyles()

    const copyIDToClipboard = ()=>{
        Clipboard.setString(id)
        ToastAndroid.showWithGravity("Link copied.",ToastAndroid.SHORT,ToastAndroid.CENTER)
    }

    const shareChatRoomID = async()=>{
        try{
            const res = await Share.share({
                message:`Join the room using the below and lets chAt\n${id}`
            })

            if(res.action===Share.sharedAction){
                if (res.activityType) {
                } else {
                }
            }else if(res.action === Share.dismissedAction){
            }
        }catch(err){
            console.log(err);
            
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.popUpContainer}>
                <View style={styles.header}>
                    <Text style={styles.titleText}>Chat room ID</Text>
                    <ButtonWrapper
                        onClick={close}
                        style={{}}
                        >
                        <Ionicons name="md-close" size={24} style={styles.closeIcon} />
                    </ButtonWrapper>
                </View>
                <View style={styles.idContainer}>
                    <View style={styles.idTextContainer}>
                        <Text numberOfLines={1} style={styles.idText}>{id}</Text>
                    </View>
                    <ButtonWrapper
                        style={copyIDToClipboard}
                        onClick={()=>{}}
                    >
                        <MaterialCommunityIcons name="content-copy" size={22} style={styles.copyIcon} />
                    </ButtonWrapper>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableNativeFeedback
                        onPress={shareChatRoomID}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Share</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    )
}