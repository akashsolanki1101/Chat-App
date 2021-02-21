import React,{useState} from 'react'

import {View,Text,TextInput,TouchableWithoutFeedback,TouchableNativeFeedback,ToastAndroid} from 'react-native'

import {useStyles} from './styles'

export const NameInput = ({closeEditor})=>{
    const styles = useStyles()
    const [userName,setUserName] = useState('')
    const [showErrBox,setShowErrBox] = useState(false)
    const [lengthLimit,setLengthLimit] = useState(10-userName.length)


    const onInputChangeHandler = (value:string)=>{
            setUserName(value)
            setLengthLimit(10-value.length)
    }
    
    const showToastWithGravity=()=>{
        ToastAndroid.showWithGravity("Name can't be empty.",ToastAndroid.SHORT,ToastAndroid.CENTER)
    }

    const handleOnSave = ()=>{
        if(userName.length===0){
            showToastWithGravity()
        }
    }
    
    return(
        <TouchableWithoutFeedback
            onPress={closeEditor}
        >
            <View style={styles.container}>
                <TouchableWithoutFeedback>
                    <View style={styles.popUpContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>Enter your name</Text>
                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput 
                                style={styles.textInput}
                                value={userName}
                                onChangeText={onInputChangeHandler}
                                maxLength={10}
                            />
                            <Text style={styles.lengthLimitText}>{lengthLimit}</Text>
                        </View>
                        <View style={styles.responseButtonContainer}>
                            <TouchableNativeFeedback
                                onPress={closeEditor}
                            >
                                <View style={styles.responseButton}>
                                    <Text style={styles.responseButtonText}>CANCEL</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback
                                onPress={handleOnSave}
                            >
                                <View style={styles.responseButton}>
                                    <Text style={styles.responseButtonText}>SAVE</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>    
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    )
} 