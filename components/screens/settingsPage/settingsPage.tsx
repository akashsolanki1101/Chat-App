import React,{useState} from 'react'

import {View,Text,TouchableNativeFeedback} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {useTheme} from '../../../hooks/themeProvider/themeProvider'
import { NameInput } from '../../uiElements/nameInputBox/nameInputBox'
import { ThemeDropDown } from '../../uiElements/themeDropDown/themeDropDown'
import {useStyles} from './styles'

export const SettingsPage = ()=>{
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


    return(
        <View style={styles.container}>
            <TouchableNativeFeedback
                onPress={handleOpenThemeSelector}
                background={TouchableNativeFeedback.Ripple(theme.theme.secondaryTextColor,false,0)}
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
                background={TouchableNativeFeedback.Ripple(theme.theme.secondaryTextColor,false,0)}
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
                <ThemeDropDown
                    closeDropDown={handleCloseThemeSelector}
                />
            }
            {
                showNameEditor&&
                <NameInput
                    closeEditor={handleCloseNameEditor}
                />
            }
        </View>
    )
}