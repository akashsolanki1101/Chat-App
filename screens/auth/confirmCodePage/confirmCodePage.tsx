import React, { useState } from 'react'

import {View,Text,TextInput,TouchableNativeFeedback,ToastAndroid,Keyboard} from 'react-native'

import {Auth} from 'aws-amplify'

import {useStyles} from './styles'
import { AppName } from '../../../components/uiElements/appName/appName'
import {useTheme} from '../../../hooks/themeProvider/themeProvider'
import {ErrorBox} from '../../../components/uiElements/errBox/errBox'
import {BackDrop} from '../../../components/uiElements/backdrop/backdrop'
import {Loader} from '../../../components/uiElements/loader/loader'

export const ConfirmCodePage = ({navigation})=>{
    const styles = useStyles()
    const theme = useTheme()

    const [userName,setUserName] = useState("")
    const [code,setCode] = useState("")
    const [isUserNameEmpty,setIsUserNameEmpty] = useState(false)
    const [isCodeEmpty,setIsCodeEmpty] = useState(false)
    const [errMessage,setErrMessage] = useState("")
    const [showErrBox,setShowErrBox] = useState(false)
    const [showLoader,setShowLoader] = useState(false)
    const [loaderMessage,setLoaderMessage] = useState("")

    const onUserNameInputChange = (val:string)=>{
        if(val.trim().length>0){
            setIsUserNameEmpty(false)
        }

        setUserName(val)
    }

    const onCodeInputChange = (val:string)=>{
        if(val.trim().length>0){
            setIsCodeEmpty(false)
        }

        console.log(val)
        setCode(val)
    }

    const onEndEditingUserName = ()=>{
        if(userName.trim().length===0){
            setIsUserNameEmpty(true)
        }
    }

    const onEndEditingCode = ()=>{
        if(code.trim().length===0){
            setIsCodeEmpty(true)
        }
    }

    const navigateToSignInPage = ()=>{
        setIsUserNameEmpty(false)
        navigation.navigate('SignInPage')
    }

    const confirmEmail = async ()=>{
        if(userName.trim().length===0){
            setIsUserNameEmpty(true)
            ToastAndroid.showWithGravity("User name can't be empty.",ToastAndroid.LONG,ToastAndroid.CENTER)
            return
        }

        if(code.trim().length===0){
            setIsCodeEmpty(true)
            ToastAndroid.showWithGravity("Enter the code which you received through email.",ToastAndroid.LONG,ToastAndroid.CENTER)
            return
        }

        Keyboard.dismiss()
        setLoaderMessage("Confirming...")
        setShowLoader(true)
        try{
            const res = await Auth.confirmSignUp(userName,code)
            console.log(res);
            setShowLoader(false)
            setErrMessage("Your email is confirmed. Now you can sign in to continue.")
            setShowErrBox(true)
        }catch(err){
            setShowLoader(false)
            setErrMessage(err.message)
            setShowErrBox(true)
        }
    }

    const resendCode = async ()=>{
        if(userName.trim().length===0){
            setIsUserNameEmpty(true)
            ToastAndroid.showWithGravity("Please enter the user name to receive the code.",ToastAndroid.LONG,ToastAndroid.CENTER)
            return
        }

        Keyboard.dismiss()
        setLoaderMessage("Sending...")
        setShowLoader(true)
        try{
            const res = await Auth.resendSignUp(userName)
            console.log(res);
            setShowLoader(false)
            setErrMessage("Code is send to your email.")
            setShowErrBox(true)
        }catch(err){    
            setShowLoader(false)
            setErrMessage(err.message)
            setShowErrBox(true)
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <AppName
                    style={styles.appNameStyle}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Confirm email</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.formElement}>
                    <Text style={styles.inputNameText}>User name*</Text>
                    <View style={{...styles.inputBoxContainer,...isUserNameEmpty&&styles.errIndicator}}>
                        <TextInput
                            value={userName}
                            onChangeText={onUserNameInputChange}
                            onEndEditing={onEndEditingUserName}
                            style={styles.inputBox}
                            textContentType={'name'}
                            placeholder={"Enter your username"}
                            placeholderTextColor={theme.theme.secondaryTextColor}
                        />
                    </View>
                </View>
                <View style={styles.formElement}>
                    <Text style={styles.inputNameText}>Confirmation code*</Text>
                    <View style={{...styles.inputBoxContainer,...isCodeEmpty&&styles.errIndicator}}>
                        <TextInput
                            value={code}
                            onChangeText={onCodeInputChange}
                            onEndEditing={onEndEditingCode}
                            style={styles.inputBox}
                            textContentType={'oneTimeCode'}
                            keyboardType={'numeric'}
                            placeholder={"Enter your confirmation code"}
                            placeholderTextColor={theme.theme.secondaryTextColor}
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableNativeFeedback
                        onPress={confirmEmail}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Confirm</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.otherOptionsContainer}>                    
                    <TouchableNativeFeedback
                        onPress={resendCode}//set resend functionality
                    >
                        <Text style={styles.signupButtonText}>Resend code</Text>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={navigateToSignInPage}
                    >
                        <Text style={styles.signupButtonText}>Sign In</Text>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <BackDrop
                show={showLoader}
                close={()=>{}}
            >   
                <Loader
                    message={loaderMessage}
                />
            </BackDrop>
            <BackDrop
                show={showErrBox}
                close={()=>{setShowErrBox(false)}}
            >
                <ErrorBox
                    message={errMessage}
                    closeDialogBox={()=>setShowErrBox(false)}
                />
            </BackDrop>
        </View>
    )
}