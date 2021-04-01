import React from 'react'

import {View,Text,TextInput,Button,TouchableNativeFeedback} from 'react-native'

import {Auth} from 'aws-amplify'

import {useStyles} from './styles'
import { AppName } from '../../../components/uiElements/appName/appName'
import {useTheme} from '../../../hooks/themeProvider/themeProvider'

export const SignInPage = ({navigation})=>{
    const styles = useStyles()
    const theme = useTheme()

    const logout = ()=>{
        Auth.signOut()
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <AppName
                    style={styles.appNameStyle}
                />
            </View>
            <View style={styles.form}>
                <View style={styles.formElement}>
                    <Text style={styles.inputNameText}>Email*</Text>
                    <View style={styles.inputBoxContainer}>
                        <TextInput
                            style={styles.inputBox}
                            textContentType={'emailAddress'}
                            placeholder={"test@test.com"}
                            placeholderTextColor={theme.theme.secondaryTextColor}
                        />
                    </View>
                </View>
                <View style={styles.formElement}>
                    <Text style={styles.inputNameText}>Password*</Text>
                    <View style={styles.inputBoxContainer}>
                        <TextInput
                            style={styles.inputBox}
                            textContentType={'password'}
                            placeholder={"Pick a strong one"}
                            placeholderTextColor={theme.theme.secondaryTextColor}
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableNativeFeedback
                        onPress={logout}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Log in</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.otherOptionsContainer}>
                    <TouchableNativeFeedback
                        onPress={()=>{navigation.navigate('SignUpPage')}}
                    >
                        <Text style={styles.signupButtonText}>Forgot Password</Text>
                    </TouchableNativeFeedback>                    
                    <TouchableNativeFeedback
                        onPress={()=>{navigation.navigate('SignUpPage')}}
                    >
                        <Text style={styles.signupButtonText}>Sign Up</Text>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    )
}

