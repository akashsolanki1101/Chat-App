import React,{useState} from 'react'

import {View,Text,TouchableNativeFeedback} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useSelector} from "react-redux"

import {useTheme} from '../../hooks/themeProvider/themeProvider'
import { Avatar } from '../../components/uiElements/avatar/avatar'
import { BackDrop } from '../../components/uiElements/backdrop/backdrop'
import { NameInput } from '../../components/uiElements/nameInputBox/nameInputBox'
import { ThemeDropDown } from '../../components/uiElements/themeDropDown/themeDropDown'
import {useStyles} from './styles'
import { Header } from '../../components/uiElements/header/header'
import { ButtonWrapper } from '../../components/uiElements/buttonWrapper/buttonWrapper'
import { SelectImage } from '../../components/uiElements/selectImage/selectImage'


export const SettingsPage = ({navigation})=>{
    const theme = useTheme()
    const styles = useStyles()
    const userInfo = useSelector(store=>store.userInfo)
    const themeFormat = useSelector(store=>store.themeFormat)

    const [showThemeSelector,setShowThemeSelector] = useState(false)
    const [showNameEditor,setShowNameEditor] = useState(false)
    const [showAboutEditor,setShowAboutEditor] = useState(false)
    const [showImageSelector,setShowImageSelector] = useState(false)

    const handleOpenThemeSelector =()=>{
        setShowThemeSelector(true)
    } 

    const handleCloseThemeSelector = ()=>{
        setShowThemeSelector(false)
    }

    const handleOpenNameEditor=()=>{
        setShowNameEditor(true)
    }

    const handleCloseNameEditor=()=>{
        setShowNameEditor(false)
    }

    const handleOpenAboutEditor = () => {

    }

    const handleCloseAboutEditor = () => {

    }

    const handleOpenImageSelector = ()=>{
        setShowImageSelector(true)
    }

    const handleCloseImageSelector = ()=>{
        setShowImageSelector(false)
    }
   
    const handleOnProfileSetionClick = ()=>{
        console.log("hello");
        
    }


    return(
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title={"Settings"}
            />
            <View style={styles.myInfoContainer}>
                <TouchableNativeFeedback
                    onPress={handleOnProfileSetionClick}
                >
                    <View style={styles.myImageContainer}>
                        <Avatar
                            imgSrc={userInfo.imageUri}
                            style={styles.myImage}
                        />
                        <ButtonWrapper
                            onClick={handleOpenImageSelector}
                            style={styles.cameraIconWrapper}
                        >
                            <Entypo name="camera" size={20} style={styles.cameraIcon} />
                        </ButtonWrapper>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <TouchableNativeFeedback
                onPress={handleOpenNameEditor}
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
                onPress={handleOpenAboutEditor}
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
                onPress={handleOpenThemeSelector}
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
            {
                showThemeSelector&&
                <BackDrop
                    close={handleCloseThemeSelector}
                >
                    <ThemeDropDown
                        closeDropDown={handleCloseThemeSelector}
                    />
                </BackDrop>
            }
            {
                showNameEditor&&
                <BackDrop
                    close={handleCloseNameEditor}
                >
                    <NameInput
                        closeEditor={handleCloseNameEditor}
                    />
                </BackDrop>
            }
            {
                showImageSelector&&
                <BackDrop
                    close={handleCloseImageSelector}
                >
                    <SelectImage
                        closePopUp={handleCloseImageSelector}
                    />
                </BackDrop>
            }
        </View>
    )
}