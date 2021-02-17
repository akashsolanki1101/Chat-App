import React,{useEffect,useCallback} from 'react'

import {View,Text,StatusBar,Button} from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'

import {useStyles} from './styles'
import {useTheme} from '../../hooks/themeProvider/themeProvider'
import {dark} from '../../ui/themes/dark'
import {light} from '../../ui/themes/light'
import {ChatCard} from '../cards/chatCard/chatCard'

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

    const lightTheme = ()=>{
        theme.setMode('light')
        theme.setTheme(light.theme)
    }

    const darkTheme = ()=>{
        theme.setMode('dark')
        theme.setTheme(dark.theme)
    }

    return(
        <View style={styles.container}>
            <StatusBar barStyle={theme.mode==='dark'?'light-content':'dark-content'} backgroundColor={theme.theme.backgroundColor}/>
            <View style={styles.appNameContainer}>
                <Text style={styles.appName}>ch</Text>
                <Text style={styles.a}>A</Text>
                <Text style={styles.appName}>t</Text>
            </View>
            <ChatCard
                name={'Akash'}
                message={'Class koi??'}
                time={'11:20 am'} 
                imgSrc={require('../../assets/img/a.png')}
            />
            <ChatCard 
                name={'Aman'}
                message={'Hello'}
                time={'10:20 pm'}
                imgSrc={require('../../assets/img/c.png')}
            />
            <ChatCard 
                name={'Solanki'}
                message={'Hey man what is this, how could you do this'}
                time={'yesterday'}
                imgSrc={require('../../assets/img/d.png')}
            />
            <Button title="light" onPress={lightTheme}/>
            <Button title="dark" onPress={darkTheme}/>
        </View>
    )
}