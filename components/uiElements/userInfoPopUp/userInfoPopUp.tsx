import React from 'react'

import {View,Text,Image,TouchableNativeFeedback,TouchableWithoutFeedback} from 'react-native'

import {useStyles} from './styles'

export const UserInfoPopUp = ({closePopUp,userInfo})=>{
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
                                    source={{uri:userInfo.imageUri}}
                                />
                            </View>
                        </View>
                        <View style={styles.userInfo}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameText}>{userInfo.name}</Text>
                            </View>
                            <View style={styles.aboutContainer}>
                                <Text style={styles.aboutTitleText}>About</Text>
                                <Text style={styles.aboutText}>{userInfo.status}</Text>
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