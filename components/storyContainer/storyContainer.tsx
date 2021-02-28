import React from 'react'

import {View,Text,ScrollView} from 'react-native'

import {useStyles} from './styles'
import { Avatar } from '../uiElements/avatar/avatar'
import {DefaultImages} from '../../constants/defaultImages/defaultImages'

export const StoryContainer = ()=>{
    const styles = useStyles()

    return(
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{marginRight:10}}>
                    <Avatar style={{}} imgSrc={DefaultImages.person}/>
                </View>
                <View style={{marginRight:10}}>
                    <Avatar style={{}} imgSrc={DefaultImages.person}/>
                </View>
                <View style={{marginRight:10}}>
                    <Avatar style={{}} imgSrc={DefaultImages.person}/>
                </View>
                <View style={{marginRight:10}}>
                    <Avatar style={{}} imgSrc={DefaultImages.person}/>
                </View>
                <View style={{marginRight:10}}>
                    <Avatar style={{}} imgSrc={DefaultImages.person}/>
                </View>         
                <View style={{marginRight:10}}>
                    <Avatar style={{}} imgSrc={DefaultImages.person}/>
                </View>
            </ScrollView>
        </View>
    )
}