import React from 'react'

import {View,Text,Image,TouchableNativeFeedback,TouchableWithoutFeedback} from 'react-native'

import {useStyles} from './styles'

export const UserInfoPopUp = ({closePopUp})=>{
    const styles = useStyles()

    return(
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={()=>{}}
            >
                <View>
                    <View style={styles.infoPopUp}>
                        <View style={styles.profileImageContainer}>
                            <View style={styles.imageBackground}>

                            </View>
                            <View style={styles.imageWrapper}>
                                <Image
                                    style={styles.profileImage}
                                    source={require('../../../assets/img/c.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.userInfo}>
                            <View style={styles.nameAndNumberContainer}>
                                <Text style={styles.nameText}>Aakash</Text>
                                <Text style={styles.numberText}>9174762509</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.closeButtonContainer}>
                        <TouchableNativeFeedback
                            onPress={closePopUp}
                        >
                            <View style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>Close</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}