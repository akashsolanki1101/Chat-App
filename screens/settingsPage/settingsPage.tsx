import React,{useState} from 'react'

import {View,Text,TouchableNativeFeedback} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useSelector} from "react-redux"

import {useTheme} from '../../hooks/themeProvider/themeProvider'
import { Avatar } from '../../components/uiElements/avatar/avatar'
import { BackDrop } from '../../components/uiElements/backdrop/backdrop'
import { ButtonWrapper } from '../../components/uiElements/buttonWrapper/buttonWrapper'
import { NameInput } from '../../components/uiElements/nameInputBox/nameInputBox'
import { ThemeDropDown } from '../../components/uiElements/themeDropDown/themeDropDown'
import {useStyles} from './styles'
import { Header } from '../../components/uiElements/header/header'

export const SettingsPage = ({navigation})=>{
    const theme = useTheme()
    const styles = useStyles()
    const userInfo = useSelector(store=>store.userInfo)
    const themeFormat = useSelector(store=>store.themeFormat)

    const [showThemeSelector,setShowThemeSelector] = useState(false)
    const [showNameEditor,setShowNameEditor] = useState(false)

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

    const handleOnProfileSetionClick = ()=>{
        navigation.navigate("ProfilePage")
    }


    return(
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title={"Settings"}
            />
            <TouchableNativeFeedback
                onPress={handleOnProfileSetionClick}
            >
                <View style={styles.myInfoContainer}>
                    <View style={styles.myImageContainer}>
                        <Avatar
                            imgSrc={userInfo.imageUri}
                            style={styles.myImage}
                            />
                    </View>
                    <View style={styles.myNameContainer}>
                        <Text style={styles.myNameText}>{userInfo.name}</Text>
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
        </View>
    )
}