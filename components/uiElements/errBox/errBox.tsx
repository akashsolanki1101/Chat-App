import React from 'react'

import {View,Text,TouchableNativeFeedback,TouchableWithoutFeedback} from 'react-native'

import {useStyles} from './styles'

export const ErrorBox = ({closeDialogBox,message})=>{
    const styles = useStyles()

    return(
        <TouchableWithoutFeedback
            onPress={closeDialogBox}
        >
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPress={()=>{}}
                >
                    <View style={styles.errorBox}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Warning!</Text>
                        </View>
                        <View style={styles.errorMessage}>
                            <Text style={styles.errorMessageText}>{message}</Text>
                        </View>
                        <View style={styles.responseButtonContainer}>
                            <TouchableNativeFeedback
                                onPress={closeDialogBox}
                            >
                                <View style={styles.responseButton}>
                                    <Text style={styles.responseButtonText}>OK</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    )
}