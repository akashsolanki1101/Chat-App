import React from 'react'

import {View,Text,TextInput} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import {useStyles} from './styles'
import {useTheme} from '../../hooks/themeProvider/themeProvider'

export const SearchBar = ()=>{
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
                <Feather name="search" size={24} style={styles.searchIcon} />
            </View>
        </View>
    )
}