import React,{useState} from 'react'

import {View,TouchableWithoutFeedback} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'

import {useStyles} from './styles'
import {ChatCard} from '../../uiElements/cards/chatCard/chatCard'
import {useTheme} from '../../../hooks/themeProvider/themeProvider'
import {AppName} from '../../uiElements/appName/appName'
import {ButtonWrapper} from '../../uiElements/buttonWrapper/buttonWrapper'
import { StoryContainer } from '../../storyContainer/storyContainer'
import { DropDown } from '../../uiElements/dropDown/dropDown'
import { BackDrop } from '../../uiElements/backdrop/backdrop'
import { UserInfoPopUp } from '../../uiElements/userInfoPopUp/userInfoPopUp'

export const HomePage = ({navigation})=>{
    const [showDropDown,setShowDropDown] = useState(false) 
    const [showUserInfoPopUp,setShowUserInfoPopUp] = useState(false) 

    const styles = useStyles()
    const theme = useTheme()

    const data = [
        {
            title : 'Settings',
            func : ()=>{
                handleCloseDropDown()
                navigation.navigate('SettingsPage')
            }
        },
    ]

    const handleOnChatCardClick = ()=>{
        handleCloseDropDown()
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
        handleCloseDropDown()
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
                            imgSrc={require('../../../assets/img/a.png')}
                        />
                        <ChatCard
                            onAvatarClick={handleOpenUserInfoPopUp}
                            onClick={handleOnChatCardClick} 
                            name={'Aman'}
                            message={'Hello'}
                            time={'10:20 pm'}
                            imgSrc={require('../../../assets/img/c.png')}
                        />
                        <ChatCard
                            onAvatarClick={handleOpenUserInfoPopUp}
                            onClick={handleOnChatCardClick} 
                            name={'Solanki'}
                            message={'Hey man what is this, how could you do this'}
                            time={'yesterday'}
                            imgSrc={require('../../../assets/img/d.png')}
                        />
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