import React,{useState} from 'react'

import {View,Text,TextInput,TouchableWithoutFeedback,TouchableNativeFeedback,ToastAndroid} from 'react-native'

import {useStyles} from './styles'

export const NameInput = ({closeEditor,title,errMessage,length,value,onSaveClick})=>{
    const styles = useStyles()
    const [userName,setUserName] = useState(value)
    const [showErrBox,setShowErrBox] = useState(false)
    const [lengthLimit,setLengthLimit] = useState(length-userName.length)

    const onInputChangeHandler = (value:string)=>{
        setUserName(value)
        setLengthLimit(length-value.length)
    }
    
    const showToastWithGravity=()=>{
        ToastAndroid.showWithGravity(errMessage,ToastAndroid.SHORT,ToastAndroid.CENTER)
    }

    const handleOnSave = ()=>{
        const val = userName.trim()
        if(val.length === 0){
            showToastWithGravity()
            return
        }
        onSaveClick(val)
    }
    
    return(
        <TouchableWithoutFeedback
            onPress={closeEditor}
        >
            <View style={styles.container}>
                <TouchableWithoutFeedback>
                    <View style={styles.popUpContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>{title}</Text>
                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput 
                                style={styles.textInput}
                                value={userName}
                                onChangeText={onInputChangeHandler}
                                maxLength={length}
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