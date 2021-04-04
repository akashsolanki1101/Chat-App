import React from 'react'

import {View,Text,TouchableNativeFeedback,FlatList} from 'react-native'
import {useDispatch} from 'react-redux'

import {Auth} from 'aws-amplify'

import {useStyles} from './styles'
import {setUserInfo} from '../../../store/actions/userInfo'

export const DropDown = ({navigation,close})=>{
    const styles = useStyles()
    const dispatch = useDispatch()

    const navigateToSettingsPage = ()=>{
        close()
        navigation.navigate('SettingsPage')
    }

    const logOut = async()=>{
        try{
            const res = await Auth.signOut()
            dispatch(setUserInfo({}))
        }catch(err){
            console.log(err);
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.listItemContainer} >
                <TouchableNativeFeedback
                    onPress={navigateToSettingsPage}
                >
                    <View style={styles.listItem}>
                        <Text style={styles.listItemText}>Settings</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.listItemContainer} >
                <TouchableNativeFeedback
                    onPress={logOut}
                >
                    <View style={styles.listItem}>
                        <Text style={styles.listItemText}>Log out</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}