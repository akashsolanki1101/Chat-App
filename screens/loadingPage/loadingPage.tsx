import React from 'react'

import {View,Image,ActivityIndicator,StatusBar} from 'react-native'

import {useStyles} from './styles'
import {dark} from '../../ui/themes/dark'

export const LoadingPage = ()=>{
    const styles = useStyles()

    return(
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={dark.theme.backgroundColor}/>
            <Image
                style={styles.appNameImage}
                source={require("../../assets/splash9.png")}
            />
            <ActivityIndicator
                color={'white'}
                size={25}
            />
        </View>
    )

}