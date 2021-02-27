import React from 'react'

import {View,Text} from 'react-native'

import {useStyles} from './styles'
import {Header} from '../../components/uiElements/header/header'

export const ContactsPage = ({navigation})=>{
    const styles = useStyles()

    return(
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title={"Contacts"}
            />
        </View>
    )
}