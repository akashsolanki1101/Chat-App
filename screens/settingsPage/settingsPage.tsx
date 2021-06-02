import React,{useState} from 'react'

import {View,Text,TouchableNativeFeedback, Linking} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useSelector,useDispatch} from "react-redux"

import {API,graphqlOperation} from 'aws-amplify'
import {updateUser} from '../../graphql/mutations'

import {useTheme} from '../../hooks/themeProvider/themeProvider'
import { Avatar } from '../../components/uiElements/avatar/avatar'
import { BackDrop } from '../../components/uiElements/backdrop/backdrop'
import { NameInput } from '../../components/uiElements/nameInputBox/nameInputBox'
import { ThemeDropDown } from '../../components/uiElements/themeDropDown/themeDropDown'
import {useStyles} from './styles'
import { Header } from '../../components/uiElements/header/header'
import { ButtonWrapper } from '../../components/uiElements/buttonWrapper/buttonWrapper'
import { SelectImage } from '../../components/uiElements/selectImage/selectImage'
import { Loader } from '../../components/uiElements/loader/loader'
import {setUserInfo} from '../../store/actions/userInfo'

export const SettingsPage = ({navigation})=>{
    const theme = useTheme()
    const styles = useStyles()
    const dispatch = useDispatch()
    const userInfo = useSelector(store=>store.userInfo)
    const themeFormat = useSelector(store=>store.themeFormat)    

    const [showThemeSelector,setShowThemeSelector] = useState(false)
    const [showNameEditor,setShowNameEditor] = useState(false)
    const [showAboutEditor,setShowAboutEditor] = useState(false)
    const [showImageSelector,setShowImageSelector] = useState(false)
    const [showLoader,setShowLoader] = useState(false)
    const [loaderMessage,setLoaderMessage]  = useState("")


    const toggleThemeSelector =(val:boolean)=>{
        setShowThemeSelector(val)
    } 

    const toggleNameEditor=(val:boolean)=>{
        setShowNameEditor(val)
    }

    const toggleAboutEditor = (val:boolean) => {
        setShowAboutEditor(val)
    }

    const toggleImageSelector = (val:boolean)=>{
        setShowImageSelector(val)
    }

    const toggleLoader = (val:boolean)=>{
        setShowLoader(val)
    }
   
    const handleProfileSetionClick = ()=>{
    }

    const onSavingName = async (val:string)=>{
        toggleNameEditor(false)
        setLoaderMessage("Updating name...")
        toggleLoader(true)
        try{
            await API.graphql(graphqlOperation(updateUser,{
                input:{
                    id:userInfo.id,
                    name:val
                }
            }))
            const _userInfo = {
                id:userInfo.id,
                name:val,
                status:userInfo.status,
                imageUri:userInfo.imageUri                
            }
            dispatch(setUserInfo(_userInfo))
            toggleLoader(false)
        }catch(err){
            console.log(err)
        }
    }

    const onSavingAbout = async (val:string)=>{
        toggleAboutEditor(false)
        setLoaderMessage("Updating about...")
        toggleLoader(true)
        try{
            await API.graphql(graphqlOperation(updateUser,{
                input:{
                    id:userInfo.id,
                    status:val
                }
            }))
            const _userInfo = {
                id:userInfo.id,
                name:userInfo.name,
                status:val,
                imageUri:userInfo.imageUri                
            }
            dispatch(setUserInfo(_userInfo))
            toggleLoader(false)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title={"Settings"}
            />
            <View style={styles.myInfoContainer}>
            <View style={styles.myImageContainer}>
                <Avatar
                    imgSrc={userInfo.imageUri}
                    style={styles.myImage}
                />
                <ButtonWrapper
                    onClick={()=>{toggleImageSelector(true)}}
                    style={styles.cameraIconWrapper}
                >
                    <Entypo name="camera" size={20} style={styles.cameraIcon} />
                </ButtonWrapper>
            </View>
            </View>
            <TouchableNativeFeedback
                onPress={()=>{toggleNameEditor(true)}}
            >
                <View style={styles.nameButtonContainer}>
                    <View style={styles.nameButtonIconContainer}>
                        <Ionicons name="person" size={22} color={theme.theme.primaryTextColor}/>
                    </View>
                    <View style={styles.nameButtonTextContainer}>
                        <Text style={styles.nameButtonText}>Name</Text>
                        <Text style={styles.nameText}>{userInfo.name}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
                onPress={()=>{toggleAboutEditor(true)}}
            >
                <View style={styles.nameButtonContainer}>
                    <View style={styles.nameButtonIconContainer}>
                        <Ionicons name="md-information-circle-outline" size={22} color={theme.theme.primaryTextColor} />
                    </View>
                    <View style={styles.nameButtonTextContainer}>
                        <Text style={styles.nameButtonText}>About</Text>
                        <Text style={styles.nameText}>{userInfo.status}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
                onPress={()=>{toggleThemeSelector(true)}}
            >
                <View style={styles.themeButtonContainer}>
                    <View style={styles.themeButtonIconContainer}>
                        {
                            theme.mode==='dark'?
                            <Ionicons name="moon" size={22} color={theme.theme.primaryTextColor}/>
                            :<Feather name="sun" size={22} color={theme.theme.primaryTextColor}/>
                        }
                    </View>
                    <View style={styles.themeButtonTextContainer}>
                        <Text style={styles.themeButtonText}>Theme</Text>
                        <Text style={styles.themeModeText}>{themeFormat}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
            
            <View style={styles.developerNameContainer}>
                <Text style={styles.fromText}>from</Text>
                <Text style={styles.developerName}>AKASH</Text>
            </View>

            <BackDrop
                close={()=>{toggleThemeSelector(false)}}
                show={showThemeSelector}
            >
                <ThemeDropDown
                    closeDropDown={()=>{toggleThemeSelector(false)}}
                />
            </BackDrop>

            <BackDrop
                close={()=>{toggleNameEditor(false)}}
                show={showNameEditor}
            >
                <NameInput
                    value={userInfo.name}
                    closeEditor={()=>{toggleNameEditor(false)}}
                    title={"Enter your name"}
                    errMessage={"Name can't be empty."}
                    length={15}
                    onSaveClick={onSavingName}
                />
            </BackDrop>

            <BackDrop
                close={()=>{toggleAboutEditor(false)}}
                show={showAboutEditor}
            >
                <NameInput
                    value={userInfo.status}
                    closeEditor={()=>{toggleAboutEditor(false)}}
                    title={"Add about"}
                    errMessage={"About can't be empty."}
                    length={50}
                    onSaveClick={onSavingAbout}
                />
            </BackDrop>

            <BackDrop
                close={()=>{toggleImageSelector(false)}}
                show={showImageSelector}
            >
                <SelectImage
                    closePopUp={()=>{toggleImageSelector(false)}}
                    toggleLoader={toggleLoader}
                    setLoaderMessage={setLoaderMessage}
                />
            </BackDrop>

            <BackDrop
                close={()=>{}}
                show={showLoader}
            >
                <Loader
                    message={loaderMessage}
                />
            </BackDrop>
                        
        </View>
    )
}