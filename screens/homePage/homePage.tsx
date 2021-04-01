import React,{useState,useEffect} from 'react'

import {View,TouchableWithoutFeedback,FlatList,ActivityIndicator} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'

import {API,graphqlOperation,Auth} from 'aws-amplify'
import {getUser} from '../../modifiedQueries/modifiedQueries'

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
import {ConnectionOptions} from '../../components/uiElements/connectionOption/connectionOption'

export const HomePage = ({navigation})=>{
    const [showDropDown,setShowDropDown] = useState(false) 
    const [showUserInfoPopUp,setShowUserInfoPopUp] = useState(false)
    const [showConnectionOption,setShowConnectionOption] = useState(false) 
    const [userInfo,setUserInfo] = useState({})
    const [chats,setChats] = useState([])
    const [showDataLoadingSpinner,setShowDataLoadingSpinner] = useState(true)

    const styles = useStyles()
    const theme = useTheme()

    const data = [
        {
            title : 'Settings',
            func : ()=>{
                toggleDropDown(false)
                navigation.navigate('SettingsPage')
            }
        },
    ]

    const handleOnSearchButtonClick = ()=>{
        navigation.navigate("SearchPage")
    }

    const toggleDropDown = (val:boolean)=>{
        setShowDropDown(val)
    }

    const toggleConnectionOptionPage = (val:boolean)=>{
        setShowConnectionOption(val)
    }

    const handleOpenUserInfoPopUp = (data:object)=>{        
        setUserInfo(data)
        toggleDropDown(false)
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
                setShowDataLoadingSpinner(false)
                setChats(userData.data.getUser.chatRoomUser.items)
            }catch(err){
                console.log(err);
            }
        }

        fetchUserDetails()
    },[])
   
    return(
        <TouchableWithoutFeedback
            onPress={()=>{toggleDropDown(false)}}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <AppName/>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        {/* <ButtonWrapper
                            onClick={handleOnSearchButtonClick}
                            style={{}}
                        >
                            <Feather name="search" size={24} style={styles.searchIcon} />
                        </ButtonWrapper> */}
                        <ButtonWrapper
                            onClick={()=>{toggleDropDown(true)}}
                            style={{}}
                        >
                            <Entypo name="dots-three-vertical" size={22} style={styles.menuButton} />
                        </ButtonWrapper>                    
                    </View>
                </View>
                {
                    showDataLoadingSpinner&&
                    <View style={styles.dataLoadingSpinnerContainer}>
                        <ButtonWrapper
                            onClick={()=>{}}
                            style={styles.dataLoadingSpinner}
                        >
                            <ActivityIndicator
                                size={25}
                                color={theme.theme.activeColor}
                            />
                        </ButtonWrapper>
                    </View>
                }

                {
                    !showDataLoadingSpinner&&
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
                                    handleCloseDropDown={()=>{toggleDropDown(false)}}
                                />
                            )
                        }}
                    />
                </View>
                }
                {
                    showDropDown&&
                    <DropDown
                        data={data}
                    />
                }
                <ContactsButton
                    onClick={()=>toggleConnectionOptionPage(true)}
                />
                <BackDrop
                    show={showUserInfoPopUp}
                    close={handleCloseUserInfoPopUp}
                >
                    <UserInfoPopUp
                        closePopUp={handleCloseUserInfoPopUp}
                        userInfo={userInfo}
                    />
                </BackDrop>
                <BackDrop
                    show={showConnectionOption}
                    close={()=>{toggleConnectionOptionPage(false)}}
                >
                    <ConnectionOptions
                        navigation={navigation}
                        close={()=>{toggleConnectionOptionPage(false)}}
                    />
                </BackDrop>
            </View>
       </TouchableWithoutFeedback>
    )
}