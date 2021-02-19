import React from 'react'

import {View,Text,TextInput} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {useStyles} from './styles'
import {useTheme} from '../../hooks/themeProvider/themeProvider'
import {ButtonWrapper} from '../buttonWrapper/buttonWrapper'

export const MessageInputBox = ()=>{
    const styles = useStyles()
    const theme = useTheme()

    return(
        <View style={styles.container}>
            <View style={styles.messageBoxContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type your message..."
                        placeholderTextColor={theme.theme.primaryTextColor}
                    />
                </View>
                <ButtonWrapper
                    style={{}}
                    onClick={()=>{}}
                >
                    <Ionicons name="md-send" size={28} style={styles.sendButton} />
                </ButtonWrapper>
            </View>
        </View>
    )
}
