import React from 'react'

import {View,Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ButtonWrapper } from '../buttonWrapper/buttonWrapper'
import {useSelector} from 'react-redux'

import {useStyles} from './styles'

export const TaggedMessage  = ({taggedMessageData,handleSetTaggedMessage,showCancelButton=false})=>{
    const styles = useStyles()
    const isEmpty = Object.keys(taggedMessageData).length===0?true:false    
    const myUserID = useSelector(store=>store.userInfo.id)
    
    if(isEmpty){
        return null;
    }

    const name = taggedMessageData.taggedMessageSenderID===myUserID?'You':taggedMessageData.taggedMessageSenderName

    return(
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.taggedMessageSenderText}>{name}</Text>
                </View>
                <ButtonWrapper
                    style={styles.closeIconWrapper}
                    onClick={()=>{handleSetTaggedMessage({})}}
                    show={showCancelButton}
                >
                    <Ionicons name="md-close" size={18} style={styles.closeIcon} />
                </ButtonWrapper>
            </View>
            <View style={styles.bottomContainer}>
                <Text numberOfLines={3} style={styles.taggedMessageText}>{taggedMessageData.taggedMessageContent}</Text>
            </View>
        </View>
    )
}