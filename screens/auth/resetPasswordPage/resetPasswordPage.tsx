import React from 'react'

import {View,Text} from 'react-native'

import {useStyles} from './styles'

export const ResetPasswordPage = ()=>{
    const styles = useStyles()

    return(
        <View style={styles.container}>
            <Text>Reset it vro.</Text>
        </View>
    )
}