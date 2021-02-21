import React,{useState} from 'react'

import {View,Text,StyleSheet,TouchableWithoutFeedback,TouchableNativeFeedback} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Appearance} from 'react-native-appearance'

import {dark} from '../../../ui/themes/dark'
import {light} from '../../../ui/themes/light'
import {useStyles} from './styles'
import {useTheme} from '../../../hooks/themeProvider/themeProvider'


export const ThemeDropDown = ({closeDropDown})=>{
    const styles = useStyles()
    const theme = useTheme()

    const [showErrBox,setShowErrBox] = useState(false)
    const [mode,setMode] = useState({
        systemDefault:false,
        dark:true,
        light:false        
    })

    const handleShowErrBox = ()=>{
        setShowErrBox(true)
    }

    const handleCloseErrBox = ()=>{
        setShowErrBox(false)
    }

    const handleOptionButtonClick = (option:any)=>{
        const newState = {
            systemDefault:false,
            dark:false,
            light:false
        }

        // for(let key in newState){
        //     if(key===option){
        //         newState[key] = true
        //     }
        // }

        // newState[option] = true

        setMode(newState)
    }

    const handleOkButtonClick = ()=>{      
        if(mode.systemDefault){
            const colorScheme = Appearance.getColorScheme()
            if(colorScheme==='dark'){
                theme.setMode('dark')
                theme.setTheme(dark.theme)
            }else{
                theme.setMode('light')
                theme.setTheme(light.theme)
            }
        }else if(mode.light){
            theme.setMode('light')
            theme.setTheme(light.theme)
        }else if(mode.dark){
            theme.setMode('dark')
            theme.setTheme(dark.theme)
        }
        closeDropDown()
    }

    return (
        <TouchableWithoutFeedback
            onPress={closeDropDown}
        >
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPress={()=>{}}
                >
                    <View style={styles.dropDownContainer}>
                        <View style={styles.titleTextContainer}>
                            <Text style={styles.titleText}>Choose theme</Text>
                        </View>
                        <View style={styles.themeOptionsContainer}>
                            <TouchableNativeFeedback
                                onPress={()=>{handleOptionButtonClick('systemDefault')}}
                            >
                                <View style={styles.optionContainer}>
                                    <View style={styles.radioButtonContainer}>
                                        <Ionicons name={mode.systemDefault?"radio-button-on":"radio-button-off"} color={theme.theme.activeColor} size={22}/>
                                    </View>
                                    <View style={styles.optionTextContainer}>
                                        <Text style={styles.optionText}>System default</Text>
                                    </View>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback
                                onPress={()=>{handleOptionButtonClick('dark')}}
                            >
                                <View style={styles.optionContainer}>
                                    <View style={styles.radioButtonContainer}>
                                        <Ionicons name={mode.dark?"radio-button-on":"radio-button-off"} color={theme.theme.activeColor} size={22}/>
                                    </View>
                                    <View style={styles.optionTextContainer}>
                                        <Text style={styles.optionText}>Dark</Text>
                                    </View>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback
                                onPress={()=>{handleOptionButtonClick('light')}}
                            >
                                <View style={styles.optionContainer}>
                                    <View style={styles.radioButtonContainer}>
                                        <Ionicons name={mode.light?"radio-button-on":"radio-button-off"} color={theme.theme.activeColor} size={22}/>
                                    </View>
                                    <View style={styles.optionTextContainer}>
                                        <Text style={styles.optionText}>Light</Text>
                                    </View>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={styles.responseButtonContainer}>
                            <TouchableNativeFeedback
                                onPress={closeDropDown}
                            >
                                <View style={styles.responseButton}>
                                    <Text style={styles.responseButtonText}>CANCEL</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback
                                onPress={handleOkButtonClick}
                            >
                                <View style={styles.responseButton}>
                                    <Text style={styles.responseButtonText}>OK</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    )
}