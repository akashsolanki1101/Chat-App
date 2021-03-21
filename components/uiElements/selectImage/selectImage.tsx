import React from 'react'

import {View,Text,TouchableWithoutFeedback,Image} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as ImagePicker from 'expo-image-picker'
import {useSelector,useDispatch} from 'react-redux'

import {API,Storage,graphqlOperation} from 'aws-amplify'
import {updateUser} from '../../../graphql/mutations'

import {useStyles} from './styles'
import { ButtonWrapper } from '../buttonWrapper/buttonWrapper'
import {DefaultImages} from '../../../constants/defaultImages/defaultImages'
import {setUserInfo} from '../../../store/actions/userInfo'

export const SelectImage = ({closePopUp,toggleLoader,setLoaderMessage})=>{
    const styles = useStyles()
    const userInfo = useSelector(store=>store.userInfo)
    const dispatch = useDispatch()

    const handleRemoveClick = async ()=>{
        if(userInfo.imageUri===DefaultImages.person){
            closePopUp()
            return
        }

        try{
            closePopUp()
            setLoaderMessage("Removing profile photo...")
            toggleLoader(true)
            await API.graphql(graphqlOperation(updateUser,{
                input:{
                    id:userInfo.id,
                    imageUri:DefaultImages.person
                }
            }))

            const userUpdatedData = {
                id:userInfo.id,
                name:userInfo.name,
                imageUri:DefaultImages.person,
                status:userInfo.status
            }

            dispatch(setUserInfo(userUpdatedData))
            toggleLoader(false)
            
        }catch(err){
            closePopUp()
            console.log(err);
        }
    }

    const handleCameraClick = async ()=>{
        try{
            const result = await ImagePicker.launchCameraAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1]
            })

            if(!result.cancelled){
                closePopUp()
                setLoaderMessage("Updating profile photo...")
                toggleLoader(true)
                
                const response = await fetch(result.uri);
                const blob = await response.blob();
                const uploadedImageData = await Storage.put(`${userInfo.id}/profilePhoto`, blob, {
                    contentType: 'image/jpg',
                });

                const profilePhoto = await Storage.get(uploadedImageData.key)

                await API.graphql(graphqlOperation(updateUser,{
                    input:{
                        id:userInfo.id,
                        imageUri:profilePhoto
                    }
                }))

                const userUpdatedData = {
                    id:userInfo.id,
                    name:userInfo.name,
                    imageUri:profilePhoto,
                    status:userInfo.status
                }

                dispatch(setUserInfo(userUpdatedData))
                toggleLoader(false)

            }
        }catch(err){
            toggleLoader(false)
            closePopUp()
            console.log(err);
        }
    }

    const handleGalleryClick = async()=>{
        try{
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1]
            })
            if(!result.cancelled){
                closePopUp()
                setLoaderMessage("Updating profile photo...")
                toggleLoader(true)

                const response = await fetch(result.uri);
                const blob = await response.blob();
                const uploadedImageData = await Storage.put(`${userInfo.id}/profilePhoto`,blob, {
                    contentType: 'image/jpg',
                });

                
                const profilePhoto = await Storage.get(uploadedImageData.key)

                await API.graphql(graphqlOperation(updateUser,{
                    input:{
                        id:userInfo.id,
                        imageUri:profilePhoto
                    }
                }))

                const userUpdatedData = {
                    id:userInfo.id,
                    name:userInfo.name,
                    imageUri:profilePhoto,
                    status:userInfo.status
                }

                dispatch(setUserInfo(userUpdatedData))
                toggleLoader(false)
            }
            
        }catch(err){
            toggleLoader(false)
            closePopUp()
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
                                onPress={handleRemoveClick}
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