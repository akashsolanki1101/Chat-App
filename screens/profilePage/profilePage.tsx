import React from 'react'

import {View,Text} from 'react-native'

import {useStyles} from './styles'
import {Header} from '../../components/uiElements/header/header'

export const ProfilePage = ({navigation})=>{
    const styles = useStyles()

    return(
        <View style={styles.container}>
            <Header
                title={"Profile"}
                navigation={navigation}
            />
            <Text>Profile</Text>
        </View>
    )
}