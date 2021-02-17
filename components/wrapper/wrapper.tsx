import React,{useEffect,useCallback} from 'react'

import {View,Text,StatusBar,Button} from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'

import {useStyles} from './styles'
import {useTheme} from '../../hooks/themeProvider/themeProvider'
import {dark} from '../../ui/themes/dark'
import {light} from '../../ui/themes/light'

export const Wrapper = ()=>{
    const styles = useStyles()
    const theme = useTheme()
    const lightKeys = theme.mode==='dark'?false:true

    // const changeNavColor = useCallback(()=>{
    //     try{
    //         changeNavigationBarColor(theme.theme.backgroundColor,lightKeys,true)
    //     }catch(e){
    //         console.log(e);
    //     }
    // },[lightKeys])

    // useEffect(()=>{
    //     changeNavColor()
    // },[changeNavColor])



    return(
        <View style={styles.container}>
            <StatusBar barStyle={theme.mode==='dark'?'light-content':'dark-content'} backgroundColor={theme.theme.backgroundColor}/>
            <Text>Les chAt</Text>
        </View>
    )
}