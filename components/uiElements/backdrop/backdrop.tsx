import React from 'react'

import {View,TouchableWithoutFeedback} from 'react-native'

import {useStyles} from './styles'

export const BackDrop = ({children,close})=>{
    const styles = useStyles()

    return(
        <TouchableWithoutFeedback
            onPress={close}
        >
            <View style={styles.container}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    )
}