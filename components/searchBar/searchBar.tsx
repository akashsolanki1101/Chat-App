import React from 'react'

import {View,Text,TextInput} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {useStyles} from './styles'
import {useTheme} from '../../hooks/themeProvider/themeProvider'
import { ButtonWrapper } from '../buttonWrapper/buttonWrapper'

export const SearchBar = ({closePage})=>{
    const styles = useStyles()
    const theme = useTheme()

    return(
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search for friend..."
                        placeholderTextColor={theme.theme.primaryTextColor}
                    />
                </View>
                <ButtonWrapper
                    onClick={closePage}
                    style={{}}
                >
                    <Ionicons name="ios-close" size={28} style={styles.closeButton} />
                </ButtonWrapper>
            </View>
        </View>
    )
}