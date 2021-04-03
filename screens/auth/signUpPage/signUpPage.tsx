import React,{useState} from 'react'

import {View,Text,TextInput,TouchableNativeFeedback,Keyboard,ToastAndroid} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import {Auth} from 'aws-amplify'

import {useStyles} from './styles'
import { AppName } from '../../../components/uiElements/appName/appName'
import {useTheme} from '../../../hooks/themeProvider/themeProvider'
import {ErrorBox} from '../../../components/uiElements/errBox/errBox'
import {BackDrop} from '../../../components/uiElements/backdrop/backdrop'
import {Loader} from '../../../components/uiElements/loader/loader'
import { ButtonWrapper } from '../../../components/uiElements/buttonWrapper/buttonWrapper'

export const SignUpPage = ({navigation})=>{
    const styles = useStyles()
    const theme = useTheme()

    const [username,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errMessage,setErrMessage] = useState("")
    const [showPassword,setShowPassword] = useState(false)
    const [showErrBox,setShowErrBox] = useState(false)
    const [showLoader,setShowLoader] = useState(false)
    const [isUserNameEmpty,setIsUserNameEmpty] = useState(false)
    const [isPasswordEmpty,setIsPasswordEmpty] = useState(false)
    const [isEmailValid,setIsEmailValid] = useState(false)

    const onUserNameInputChange = (val:string)=>{
        if(val.trim().length>0){
            setIsUserNameEmpty(false)
        }else{
            setIsUserNameEmpty(true)
        }

        setUserName(val)
    }

    const onEmailInputChange = (val:string)=>{
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(val.trim().length>0&&regex.test(val)){
            setIsEmailValid(false)
        }else{
            setIsEmailValid(true)
        }

        setEmail(val)
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
        if(username.trim().length===0){
            setIsUserNameEmpty(true)
        }
    }

    const onEndEditingPassword = ()=>{
        if(password.trim().length===0){
            setIsPasswordEmpty(true)
        }
    }

    const onEndEditingEmail =()=>{
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if(email.trim().length===0 || !regex.test(email)){
            setIsEmailValid(true)
        }
    }

    const navigateToSignInPage = ()=>{
        setIsPasswordEmpty(false)
        setIsUserNameEmpty(false)
        setIsEmailValid(false)
        navigation.navigate('SignInPage')
    }
    
    const navigateToConfirmCodePage = ()=>{
        setIsPasswordEmpty(false)
        setIsUserNameEmpty(false)
        setIsEmailValid(false)
        navigation.navigate('ConfirmCodePage')
    }

    const signUp = async ()=> {
        if(username.trim().length===0){
            setIsUserNameEmpty(true)
            ToastAndroid.showWithGravity("User name can't be empty.",ToastAndroid.LONG,ToastAndroid.CENTER)
            return
        }

        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if(!regex.test(email)){
            setIsEmailValid(true)
            ToastAndroid.showWithGravity("Enter a valid email address.",ToastAndroid.LONG,ToastAndroid.CENTER)
            return
        }

        if(password.trim().length<=5){
            setIsPasswordEmpty(true)
            ToastAndroid.showWithGravity("Password should contain atleast 6 character.",ToastAndroid.LONG,ToastAndroid.CENTER)
            return
        }

        Keyboard.dismiss()
        setShowLoader(true)

        try {
            const res = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                }
            });
            console.log(res);
            setShowLoader(false)
            setErrMessage("Account created successfully. Verification code is send to your mail. Please verify to continue.")
            setShowErrBox(true)
        } catch (err) {
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
            <View style={styles.form}>
            <View style={styles.formElement}>
                <Text style={styles.inputNameText}>User name*</Text>
                <View style={{...styles.inputBoxContainer,...isUserNameEmpty&&styles.errIndicator}}>
                    <TextInput
                        value={username}
                        onChangeText={onUserNameInputChange}
                        onEndEditing={onEndEditingUserName}
                        style={styles.inputBox}
                        textContentType={'name'}
                        placeholder={"Oliver"}
                        placeholderTextColor={theme.theme.secondaryTextColor}
                    />
                </View>
            </View>
            <View style={styles.formElement}>
                <Text style={styles.inputNameText}>Email*</Text>
                <View style={{...styles.inputBoxContainer,...isEmailValid&&styles.errIndicator}}>
                    <TextInput
                        value={email}
                        onChangeText={onEmailInputChange}
                        onEndEditing={onEndEditingEmail}
                        style={styles.inputBox}
                        textContentType={'emailAddress'}
                        placeholder={"test@test.com"}
                        placeholderTextColor={theme.theme.secondaryTextColor}
                    />
                </View>
            </View>
            <View style={styles.formElement}>
                <Text style={styles.inputNameText}>Password*</Text>
                <View style={{...styles.inputBoxContainer,...isPasswordEmpty&&styles.errIndicator}}>
                    <TextInput
                        value={password}
                        onChangeText={onPasswordInputChange}
                        onEndEditing={onEndEditingPassword}
                        style={styles.inputBox}
                        textContentType={'password'}
                        secureTextEntry={!showPassword}
                        placeholder={"Pick a strong one"}
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
                    onPress={signUp}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Create account</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.otherOptionsContainer}>
                <TouchableNativeFeedback
                    onPress={navigateToConfirmCodePage}
                >
                    <Text style={styles.signupButtonText}>Confirm email</Text>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={navigateToSignInPage}
                >
                    <Text style={styles.signupButtonText}>Log in</Text>
                </TouchableNativeFeedback>
            </View>
        </View>
            <BackDrop
                show={showLoader}
                close={()=>{}}
            >   
                <Loader
                    message={"Creating account..."}
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

