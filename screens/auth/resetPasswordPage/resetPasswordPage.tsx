import React, { useState } from 'react'

import {View,Text, TextInput, TouchableNativeFeedback,ToastAndroid,Keyboard,KeyboardAvoidingView,Platform} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import {Auth} from 'aws-amplify'

import {useStyles} from './styles'
import { AppName } from '../../../components/uiElements/appName/appName'
import {useTheme} from '../../../hooks/themeProvider/themeProvider'
import {ErrorBox} from '../../../components/uiElements/errBox/errBox'
import {BackDrop} from '../../../components/uiElements/backdrop/backdrop'
import {Loader} from '../../../components/uiElements/loader/loader'
import { ButtonWrapper } from '../../../components/uiElements/buttonWrapper/buttonWrapper'

export const ResetPasswordPage = ({navigation})=>{
    const styles = useStyles()
    const theme = useTheme()

    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [code,setCode] = useState("")
    const [isUserNameEmpty,setIsUserNameEmpty] = useState(false)
    const [isPasswordEmpty,setIsPasswordEmpty] = useState(false)
    const [isCodeEmpty,setIsCodeEmpty] = useState(false)
    const [errMessage,setErrMessage] = useState("")
    const [showErrBox,setShowErrBox] = useState(false)
    const [showLoader,setShowLoader] = useState(false)
    const [showOtherInputs,setShowOtherInputs] = useState(false)
    const [showPassword,setShowPassword] = useState(false)
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

    const onPasswordInputChange = (val:string)=>{
        if(val.trim().length>5){
            setIsPasswordEmpty(false)
        }else{
            setIsPasswordEmpty(true)
        }

        setPassword(val) 
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

    const onEndEditingPassword = ()=>{
        if(password.trim().length===0){
            setIsPasswordEmpty(true)
        }
    }

    const navigateToSignInPage = ()=>{
        setIsUserNameEmpty(false)
        navigation.navigate('SignInPage')
    }

    const sendConfirmationCode = async ()=>{
        if(userName.trim().length===0){
            setIsUserNameEmpty(true)
            ToastAndroid.showWithGravity("Please enter your user name to receive the code.",ToastAndroid.SHORT,ToastAndroid.CENTER)
            return
        }

        Keyboard.dismiss()
        setLoaderMessage("Sending...")
        setShowLoader(true)
        try{
            const res = await Auth.forgotPassword(userName)
            console.log(res);
            setShowLoader(false)
            setErrMessage("Password reset code is send to your email.")
            setShowOtherInputs(true)
            setShowErrBox(true)
        }catch(err){
            setShowLoader(false)
            setErrMessage(err.message)
            setShowErrBox(true)
            console.log(err);
        }
    }

    const resetPassword = async ()=>{
        if(userName.trim().length===0){
            setIsUserNameEmpty(true)
            ToastAndroid.showWithGravity("Please enter your user name to reset the password.",ToastAndroid.SHORT,ToastAndroid.CENTER)
            return
        }

        if(code.trim().length===0){
            setIsCodeEmpty(true)
            ToastAndroid.showWithGravity("Enter the code which you received through email.",ToastAndroid.LONG,ToastAndroid.CENTER)
            return
        }

        if(password.trim().length<=5){
            setIsPasswordEmpty(true)
            ToastAndroid.showWithGravity("Password should contain atleast 6 character.",ToastAndroid.LONG,ToastAndroid.CENTER)
            return
        }

        Keyboard.dismiss()
        setLoaderMessage("Resetting password...")
        setShowLoader(true)

        try{
            const res = await Auth.forgotPasswordSubmit(userName,code,password)
            console.log(res);
            setShowLoader(false)
            setErrMessage("Password is changed successfully.")
            setShowErrBox(true)
        }catch(err){
            setShowLoader(false)
            setErrMessage(err.message)
            setShowErrBox(true)
            console.log(err);
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
                <Text style={styles.titleText}>Reset your password</Text>
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
                {
                    showOtherInputs&&
                    
                    <View>
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
                        <View style={styles.formElement}>
                            <Text style={styles.inputNameText}>New password*</Text>
                        
                            <View style={{...styles.inputBoxContainer,...isPasswordEmpty&&styles.errIndicator}}>
                                <TextInput
                                    value={password}
                                    onChangeText={onPasswordInputChange}
                                    onEndEditing={onEndEditingPassword}
                                    style={styles.inputBox}
                                    textContentType={'password'}
                                    placeholder={"Enter your new password"}
                                    secureTextEntry={!showPassword}
                                    placeholderTextColor={theme.theme.secondaryTextColor}
                                />
                                {
                                    showPassword&&
                                    <ButtonWrapper
                                        onClick={()=>{setShowPassword(false)}}
                                        style={{}}
                                    >
                                        <Feather name="eye" size={20} color={theme.theme.primaryTextColor} />
                                    </ButtonWrapper>
                                }
                                {
                                    !showPassword&&
                                    <ButtonWrapper
                                        onClick={()=>{setShowPassword(true)}}
                                        style={{}}
                                    >
                                        <Feather name="eye-off" size={20} color={theme.theme.primaryTextColor} />
                                    </ButtonWrapper>
                                }
                            </View>
                        </View>
                    </View>
                }
                {
                    !showOtherInputs&&
                    <View style={styles.buttonContainer}>
                        <TouchableNativeFeedback
                            onPress={sendConfirmationCode}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Send</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                }
                {
                    showOtherInputs&&
                    <View style={styles.buttonContainer}>
                        <TouchableNativeFeedback
                            // onPress={sendConfirmationCode}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Reset</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                }
                <View style={styles.otherOptionsContainer}>                    
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