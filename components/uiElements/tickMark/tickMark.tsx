import React from 'react'

import {View} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import {useStyles} from './styles'

export const TickMark = ({messageStatus})=>{
    const styles = useStyles()

    let comp= null

    if(messageStatus==='sent'){
        comp = <Feather name="check" size={20} style={styles.tickMarkIcon1}/>
    }else if(messageStatus==='read'){
        comp = (
            <>
                <Feather name="check" size={20} style={{...styles.tickMarkIcon,...styles.tickMarkIcon2}}/>
                <Feather name="check" size={20} style={styles.tickMarkIcon}/>
            </>
    )}

    return(
        <View style={styles.container}>
            {comp}
        </View>
    )
}