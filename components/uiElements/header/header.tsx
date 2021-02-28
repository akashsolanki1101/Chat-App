import React from 'react'

import {View,Text} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ButtonWrapper } from '../buttonWrapper/buttonWrapper'

import {useStyles} from './styles'

export const Header = ({navigation,title})=>{
    const styles = useStyles()

    const handleOnBackButtonClick = ()=>{
        navigation.pop()
    }
    
    return(
        <View style={styles.header}>
            <View style={styles.leftContainer}>
                <ButtonWrapper 
                    onClick = {handleOnBackButtonClick}
                    style={{marginRight:28}}
                >
                    <AntDesign name="left" size={24} style={styles.backButton}/>
                </ButtonWrapper>
                <View style={styles.pageNameContainer}>
                    <Text style={styles.pageNameText}>
                        {title}
                    </Text>
                </View>
            </View>
        </View>
    )
}