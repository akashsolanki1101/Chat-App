import React,{useEffect,useState,useCallback} from 'react'

import {View,Text,TouchableNativeFeedback} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import {API,graphqlOperation,Auth} from 'aws-amplify'
import {listUsers} from '../../graphql/queries'

import {useStyles} from './styles'
import {Header} from '../../components/uiElements/header/header'

export const ContactsPage = ({navigation})=>{
    const styles = useStyles()

    return(
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title={"Connect"}
            />
            <View style={styles.optionsContainer}>
                <TouchableNativeFeedback
                    onPress={()=>{}}
                >
                    <View style={styles.option}>
                        <AntDesign name="enter" size={24}  style={styles.optionIcon}/>
                        <Text style={styles.optionText}>Join chat room</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={()=>{}}
                >
                    <View style={styles.option}>
                        <MaterialIcons name="create" size={24} style={styles.optionIcon} />
                        <Text style={styles.optionText}>Create chat room</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}