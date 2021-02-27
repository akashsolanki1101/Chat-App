import React from 'react'

import {View,Text} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import {useStyles} from './styles'
import {SearchBar} from '../../components/uiElements/searchBar/searchBar'
import {ButtonWrapper} from '../../components/uiElements/buttonWrapper/buttonWrapper'

export const SearchPage = ({navigation})=>{
    const styles = useStyles()

    const handleOnBackButtonClick = ()=>{
        navigation.pop()
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <SearchBar
                    closePage={handleOnBackButtonClick}
                />
            </View> 
        </View>
    )
}