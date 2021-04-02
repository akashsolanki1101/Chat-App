import React from 'react'

import {View,Text} from 'react-native'

import {useStyles} from './styles'

export const ConfirmCodePage = ()=>{
    const styles = useStyles()

    return(
        <View style={styles.container}>
            <Text>COnfirm it vro.</Text>
        </View>
    )
}