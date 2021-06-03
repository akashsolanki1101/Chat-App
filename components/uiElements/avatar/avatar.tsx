import React from 'react'

import {View,Image } from 'react-native'

import {useStyles} from './styles'

type Props = {
    imgSrc : string,
    style : object
}

export const Avatar = ({imgSrc,style}:Props)=>{
    const styles = useStyles()

    return(
        <View style={{...styles.container,...style}}>
            <Image source={{uri:imgSrc}} style={{...styles.image,...style}}/>
        </View>
    )

}