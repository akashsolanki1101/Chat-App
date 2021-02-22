import React,{useState} from 'react'

import {View,Text,TouchableNativeFeedback} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {useTheme} from '../../../hooks/themeProvider/themeProvider'
import { Avatar } from '../../uiElements/avatar/avatar'
import { BackDrop } from '../../uiElements/backdrop/backdrop'
import { ButtonWrapper } from '../../uiElements/buttonWrapper/buttonWrapper'
import { NameInput } from '../../uiElements/nameInputBox/nameInputBox'
import { ThemeDropDown } from '../../uiElements/themeDropDown/themeDropDown'
import {useStyles} from './styles'

export const SettingsPage = ({navigation})=>{
    const theme = useTheme()
    const styles = useStyles()

    const themeFormat = 'Dark'
    const userName = 'Akash'

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

    const handleOnBackButtonClick = ()=>{
        navigation.pop()
    }


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.leftContainer}>
                    <ButtonWrapper 
                        onClick = {handleOnBackButtonClick}
                        style={{marginRight:10}}
                    >
                        <AntDesign name="left" size={24} style={styles.backButton}/>
                    </ButtonWrapper>
                    <View style={styles.pageNameContainer}>
                        <Text style={styles.pageNameText}>
                            Settings
                        </Text>
                    </View>
                </View>
            </View>
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
                        <Text style={styles.nameText}>{userName}</Text>
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