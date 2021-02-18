import React from 'react'

import {View,Text,Button} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {useStyles} from './styles'
import {ChatCard} from '../cards/chatCard/chatCard'
import {useTheme} from '../../hooks/themeProvider/themeProvider'
import {dark} from '../../ui/themes/dark'
import {light} from '../../ui/themes/light'
import {Avatar} from '../avatar/avatar'
import {AppName} from '../appName/appName'
import {SearchBar} from '../searchBar/searchBar'

export const HomeScreen = ()=>{
   const styles = useStyles()
    const theme = useTheme()

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
           <View style={styles.header}>
               <Avatar imgSrc={require('../../assets/img/c.png')} style={styles.avatar}/>
               <AppName/>
               <Ionicons name="ios-menu" size={36} style={styles.hamburger}/>
           </View>
           <SearchBar/>
           <View style={styles.listContainer}>
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
       </View>
   )
}