import React from 'react'

import {View,Text,ScrollView} from 'react-native'

import {useStyles} from './styles'
import { Avatar } from '../avatar/avatar'

export const StoryContainer = ()=>{
    const styles = useStyles()

    return(
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{marginRight:10}}>
                    <Avatar style={{}} imgSrc={require('../../assets/img/a.png')}/>
                </View>
                <View style={{marginRight:10}}>
                    <Avatar style={{}} imgSrc={require('../../assets/img/c.png')}/>
                </View>
                <View style={{marginRight:10}}>
                    <Avatar style={{}} imgSrc={require('../../assets/img/d.png')}/>
                </View>
                <View style={{marginRight:10}}>
                    <Avatar style={{}} imgSrc={require('../../assets/img/c.png')}/>
                </View>
                <View style={{marginRight:10}}>
                    <Avatar style={{}} imgSrc={require('../../assets/img/a.png')}/>
                </View>         
                <View style={{marginRight:10}}>
                    <Avatar style={{}} imgSrc={require('../../assets/img/d.png')}/>
                </View>
            </ScrollView>
        </View>
    )
}