import React,{useState} from 'react'

import {View,Text,Button,TouchableNativeFeedback,TouchableWithoutFeedback} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'

import {useStyles} from './styles'
import {ChatCard} from '../cards/chatCard/chatCard'
import {useTheme} from '../../hooks/themeProvider/themeProvider'
import {dark} from '../../ui/themes/dark'
import {light} from '../../ui/themes/light'
import {Avatar} from '../avatar/avatar'
import {AppName} from '../appName/appName'
import {SearchBar} from '../searchBar/searchBar'
import {ButtonWrapper} from '../buttonWrapper/buttonWrapper'
import { StoryContainer } from '../storyContainer/storyContainer'
import { DropDown } from '../dropDown/dropDown'
import { BackDrop } from '../backdrop/backdrop'
import { UserInfoPopUp } from '../userInfoPopUp/userInfoPopUp'

export const HomeScreen = ({navigation})=>{
    const [showDropDown,setShowDropDown] = useState(false) 
    const [showUserInfoPopUp,setShowUserInfoPopUp] = useState(false) 

    const styles = useStyles()
    const theme = useTheme()

    const data = [
        {
            title : 'Settings',
            func : ()=>{}
        },
        {
            title : 'Media',
            func : ()=>{}
        },
        {
            title : 'Pay',
            func : ()=>{}
        },
        {
            title : 'View',
            func : ()=>{}
        },
        {
            title : 'r',
            func : ()=>{}
        }

    ]

     const lightTheme = ()=>{
        theme.setMode('light')
        theme.setTheme(light.theme)
    }

    const darkTheme = ()=>{
        theme.setMode('dark')
        theme.setTheme(dark.theme)
    }

    const handleOnChatCardClick = ()=>{
        navigation.navigate('ChatPage')
    } 

    const handleOnSearchButtonClick = ()=>{
        navigation.navigate("SearchPage")
    }

    const handleOpenDropDown = ()=>{
        setShowDropDown(true)
    }

    const handleCloseDropDown = ()=>{
        setShowDropDown(false)
    }

    const handleOpenUserInfoPopUp = ()=>{
        setShowUserInfoPopUp(true)
    }

    const handleCloseUserInfoPopUp = ()=>{
        setShowUserInfoPopUp(false)
    }
   
    return(
        <TouchableWithoutFeedback
            onPress={handleCloseDropDown}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <AppName/>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <ButtonWrapper
                                onClick={handleOnSearchButtonClick}
                                style={{}}
                            >
                                <Feather name="search" size={24} style={styles.searchIcon} />
                            </ButtonWrapper>
                            <ButtonWrapper
                                onClick={handleOpenDropDown}
                                style={{}}
                            >
                                <Entypo name="dots-three-vertical" size={22} style={styles.menuButton} />
                            </ButtonWrapper>                    
                    </View>
                </View>
                    <StoryContainer/>
                <View style={styles.listContainer}>
                        <ChatCard
                            onAvatarClick={handleOpenUserInfoPopUp}
                            onClick={handleOnChatCardClick}
                            name={'Akash'}
                            message={'Class koi??'}
                            time={'11:20 am'} 
                            imgSrc={require('../../assets/img/a.png')}
                        />
                        <ChatCard
                            onAvatarClick={handleOpenUserInfoPopUp}
                            onClick={handleOnChatCardClick} 
                            name={'Aman'}
                            message={'Hello'}
                            time={'10:20 pm'}
                            imgSrc={require('../../assets/img/c.png')}
                        />
                        <ChatCard
                            onAvatarClick={handleOpenUserInfoPopUp}
                            onClick={handleOnChatCardClick} 
                            name={'Solanki'}
                            message={'Hey man what is this, how could you do this'}
                            time={'yesterday'}
                            imgSrc={require('../../assets/img/d.png')}
                        />
                        <Button title="light" onPress={lightTheme}/>
                        <Button title="dark" onPress={darkTheme}/>
                    </View>
                    {
                        showDropDown&&
                        <DropDown
                            data={data}
                        />
                    }
                    {
                        showUserInfoPopUp&&
                        <BackDrop
                            close={handleCloseUserInfoPopUp}
                        >
                            <UserInfoPopUp
                                closePopUp={handleCloseUserInfoPopUp}
                            />
                        </BackDrop>
                    }
            </View>
       </TouchableWithoutFeedback>
    )
}