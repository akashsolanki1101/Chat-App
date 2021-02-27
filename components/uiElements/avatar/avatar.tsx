import React from 'react'

import {View, Text, StyleSheet,Image } from 'react-native'

import {useStyles} from './styles'

export const Avatar = ({imgSrc,style})=>{
    const styles = useStyles()
    return(
        <View style={{...styles.container,...style}}>
            <Image source={imgSrc} style={{...styles.image,...style}}/>
             {/* <Image source={{uri:'https://amplify-chatapp-dev-00944-deployment.s3.amazonaws.com/defaultImages/group.png'}} style={{...styles.image,...style}}/> */}
        </View>
    )
}