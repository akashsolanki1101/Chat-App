import React from 'react'

import {View,Text,TextInput,TouchableNativeFeedback} from 'react-native'

import {useStyles} from './styles'
import { AppName } from '../../../components/uiElements/appName/appName'
import {useTheme} from '../../../hooks/themeProvider/themeProvider'

export const SignUpPage = ({navigation})=>{
    const styles = useStyles()
    const theme = useTheme()

    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <AppName
                style={styles.appNameStyle}
            />
        </View>
        <View style={styles.form}>
            <View style={styles.formElement}>
                <Text style={styles.inputNameText}>Name*</Text>
                <View style={styles.inputBoxContainer}>
                    <TextInput
                        style={styles.inputBox}
                        textContentType={'name'}
                        placeholder={"Oliver"}
                        placeholderTextColor={theme.theme.secondaryTextColor}
                    />
                </View>
            </View>
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
                <TouchableNativeFeedback>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Create account</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.signupButtonContainer}>
                <TouchableNativeFeedback
                    onPress={()=>{navigation.navigate('SignInPage')}}
                >
                    <Text style={styles.signupButtonText}>Confirm a code</Text>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={()=>{navigation.navigate('SignInPage')}}
                >
                    <Text style={styles.signupButtonText}>Log in</Text>
                </TouchableNativeFeedback>
            </View>
        </View>
    </View>
    )
}

