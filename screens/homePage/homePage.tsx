import React,{useState,useEffect} from 'react'

import {View,TouchableWithoutFeedback,FlatList} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'

import {API,graphqlOperation,Auth} from 'aws-amplify'
import {getUser} from '../../modifiedQueries/modifiedQueries'
import {onCreateMessage} from '../../graphql/subscriptions'

import {useStyles} from './styles'
import {ChatCard} from '../../components/uiElements/cards/chatCard/chatCard'
import {useTheme} from '../../hooks/themeProvider/themeProvider'
import {AppName} from '../../components/uiElements/appName/appName'
import {ButtonWrapper} from '../../components/uiElements/buttonWrapper/buttonWrapper'
import { StoryContainer } from '../../components/storyContainer/storyContainer'
import { DropDown } from '../../components/uiElements/dropDown/dropDown'
import { BackDrop } from '../../components/uiElements/backdrop/backdrop'
import { UserInfoPopUp } from '../../components/uiElements/userInfoPopUp/userInfoPopUp'
import {ContactsButton} from '../../components/uiElements/contactsButton/contactsButton'

export const HomePage = ({navigation})=>{
    const [showDropDown,setShowDropDown] = useState(false) 
    const [showUserInfoPopUp,setShowUserInfoPopUp] = useState(false) 
    const [chats,setChats] = useState([])

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

    useEffect(()=>{
        const fetchUserDetails = async ()=>{
            try{
                const userInfo = await Auth.currentAuthenticatedUser()
                const userID = userInfo.attributes.sub

                const userData = await API.graphql(graphqlOperation(
                    getUser,{
                            id : userID
                    }

                ))                
                
                setChats(userData.data.getUser.chatRoomUser.items)
                // console.log(userData.data.getUser.chatRoomUser.items);
                

            }catch(err){
                console.log(err);
            }
        }

        fetchUserDetails()
    },[])
   
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
                    <FlatList
                        data={chats}
                        keyExtractor={item=>item.id}
                        renderItem={({item})=>{
                            return(
                                <ChatCard
                                    data={item}
                                    navigation={navigation}
                                    onAvatarClick={handleOpenUserInfoPopUp}
                                    handleCloseDropDown={handleCloseDropDown}
                                />
                            )
                        }}
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
                <ContactsButton
                    onClick={()=>navigation.navigate('ContactsPage')}
                />
            </View>
       </TouchableWithoutFeedback>
    )
}