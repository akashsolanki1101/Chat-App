import React,{useState} from 'react'

import {View,Text,TextInput,Button,TouchableNativeFeedback,ToastAndroid,Keyboard} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import {Auth} from 'aws-amplify'

import {useStyles} from './styles'
import { AppName } from '../../../components/uiElements/appName/appName'
import {useTheme} from '../../../hooks/themeProvider/themeProvider'
import {ErrorBox} from '../../../components/uiElements/errBox/errBox'
import {BackDrop} from '../../../components/uiElements/backdrop/backdrop'
import {Loader} from '../../../components/uiElements/loader/loader'
import { ButtonWrapper } from '../../../components/uiElements/buttonWrapper/buttonWrapper'

export const SignInPage = ({navigation})=>{
    const styles = useStyles()
    const theme = useTheme()

    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [errMessage,setErrMessage] = useState("")
    const [showPassword,setShowPassword] = useState(false)
    const [showErrBox,setShowErrBox] = useState(false)
    const [showLoader,setShowLoader] = useState(false)
    const [isUserNameEmpty,setIsUserNameEmpty] = useState(false)
    const [isPasswordEmpty,setIsPasswordEmpty] = useState(false)

    const logOut = ()=>{
        Auth.signOut()
    }

    const onUserNameInputChange = (val:string)=>{
        if(val.trim().length>0){
            setIsUserNameEmpty(false)
        }

        setUserName(val)
    }

    const onPasswordInputChange =(val:string)=>{
        if(val.trim().length>0){
            setIsPasswordEmpty(false)
        }

        setPassword(val)
    }

    const onEndEditingUserName = ()=>{
        if(userName.trim().length===0){
            setIsUserNameEmpty(true)
        }
    }

    const onEndEditingPassword = ()=>{
        if(password.trim().length===0){
            setIsPasswordEmpty(true)
        }
    }

    const navigateToSignUpPage = ()=>{
        setIsPasswordEmpty(false)
        setIsUserNameEmpty(false)
        navigation.navigate('SignUpPage')
    }

    const navigateToResetPasswordPage = ()=>{
        setIsPasswordEmpty(false)
        setIsUserNameEmpty(false)
        navigation.navigate('ResetPasswordPage')
    }

    const signIn = async()=>{
        if(userName.trim().length===0){
            setIsUserNameEmpty(true)
            ToastAndroid.showWithGravity("User name can't be empty.",ToastAndroid.LONG,ToastAndroid.CENTER)
            return
        }

        if(password.trim().length===0){
            setIsPasswordEmpty(true)
            ToastAndroid.showWithGravity("Password can't be empty.",ToastAndroid.LONG,ToastAndroid.CENTER)
            return
        }

        Keyboard.dismiss()
        setShowLoader(true)

        try{
            const res = await Auth.signIn(userName,password)
            console.log(res);
            setShowLoader(false)
        }catch(err){
            setShowLoader(false)
            setErrMessage(err.message)
            setShowErrBox(true)
            console.log("e",err);
        }
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
                    <Text style={styles.inputNameText}>Password*</Text>
                    <View style={{...styles.inputBoxContainer,...isPasswordEmpty&&styles.errIndicator}}>
                        <TextInput
                            value={password}
                            numberOfLines={1}
                            onChangeText={onPasswordInputChange}
                            onEndEditing={onEndEditingPassword}
                            style={styles.inputBox}
                            textContentType={'password'}
                            secureTextEntry={!showPassword}
                            placeholder={"Enter your password"}
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
                <View style={styles.buttonContainer}>
                    <TouchableNativeFeedback
                        onPress={signIn}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Log in</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.otherOptionsContainer}>
                    <TouchableNativeFeedback
                        onPress={navigateToResetPasswordPage}
                    >
                        <Text style={styles.signupButtonText}>Forgot Password</Text>
                    </TouchableNativeFeedback>                    
                    <TouchableNativeFeedback
                        onPress={navigateToSignUpPage}
                    >
                        <Text style={styles.signupButtonText}>Sign Up</Text>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <BackDrop
                show={showLoader}
                close={()=>{}}
            >   
                <Loader
                    message={"Authenticating..."}
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

