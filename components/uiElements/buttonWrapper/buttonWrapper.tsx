import React from 'react'

import {View,TouchableNativeFeedback} from 'react-native'

import {useStyles} from './styles'

export const ButtonWrapper = ({children,onClick,style,show=true})=>{
    const styles = useStyles()

    if(!show){
        return null
    }

    return(
        <View style={{...styles.container,...style}}>
            <TouchableNativeFeedback
                onPress={onClick}
            >
                <View style={styles.buttonWrapper}>
                    {children}
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}