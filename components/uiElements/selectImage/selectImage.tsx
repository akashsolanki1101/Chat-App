import React from 'react'

import {View,Text,TouchableWithoutFeedback,Image} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as ImagePicker from 'expo-image-picker'

import {useStyles} from './styles'
import { ButtonWrapper } from '../buttonWrapper/buttonWrapper'

export const SelectImage = ({closePopUp})=>{
    const styles = useStyles()

    const handleRemoveClick = async ()=>{

    }

    const handleCameraClick = async ()=>{
        try{
            const result = await ImagePicker.launchCameraAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[4,3]
            })
            console.log(result);
        }catch(err){
            console.log(err);
        }
    }

    const handleGalleryClick = async()=>{
        try{
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[4,3]
            })
            console.log(result);

        }catch(err){
            console.log(err);
        }
    }

    return(
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={()=>{}}
            > 
                    <View style={styles.optionsPopUp}>
                        <View style={styles.header}>
                            <Text style={styles.titleText}>Profile Photo</Text>
                            <ButtonWrapper
                                onClick={closePopUp}
                                style={{}}
                                >
                                <Ionicons name="md-close" size={24} style={styles.closeIcon} />
                            </ButtonWrapper>
                        </View>
                        <View style={styles.optionsContainer}>
                            <TouchableWithoutFeedback
                                onPress={()=>{}}
                            >
                                <View style={styles.option}>
                                    <Image source={require("../../../assets/img/trash1.png")} style={styles.optionsImage}/>
                                    <Text style={styles.optionText}>Remove</Text>    
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback
                                onPress={handleCameraClick}
                            >
                                <View style={styles.option}>
                                    <Image source={require("../../../assets/img/camera.png")} style={styles.optionsImage}/>
                                    <Text style={styles.optionText}>Camera</Text>    
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback
                                onPress={handleGalleryClick}
                            >
                                <View style={styles.option}>
                                    <Image source={require("../../../assets/img/gallery1.png")} style={styles.optionsImage}/>
                                    <Text style={styles.optionText}>Gallery</Text>    
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
            </TouchableWithoutFeedback>
        </View>
    )
} 