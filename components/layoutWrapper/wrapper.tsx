import React,{useEffect,useCallback, useState} from 'react'

import {View,StatusBar,LogBox} from 'react-native'
// import changeNavigationBarColor from 'react-native-navigation-bar-color'
import {NavigationContainer} from '@react-navigation/native'
import {useDispatch,useSelector} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Appearance} from 'react-native-appearance'

import {Auth,API,graphqlOperation} from 'aws-amplify'
import {getUser} from '../../graphql/queries'
import {createUser,updateUser} from '../../graphql/mutations'

import {dark} from '../../ui/themes/dark'
import {light} from '../../ui/themes/light'
import {useStyles} from './styles'
import {useTheme} from '../../hooks/themeProvider/themeProvider'
import {HomeNavigator} from '../../navigation/navigation'
import {AuthNavigator} from '../../navigation/navigation'
import {DefaultImages} from '../../constants/defaultImages/defaultImages'
import {setUserInfo} from '../../store/actions/userInfo'
import {setThemeFormat} from '../../store/actions/userInfo'
import {LoadingPage} from '../../screens/loadingPage/loadingPage'

export const Wrapper = ()=>{
    const styles = useStyles()
    const theme = useTheme()
    const dispatch = useDispatch()

    const [myUserID,setMyUserID] = useState(null)
    const [showLoadingScreen,setShowLoadingScreen] = useState(true)
    const user = useSelector(store=>store.userInfo)
    const lightKeys = theme.mode==='dark'?false:true

    const handleOnlineStatus = useCallback(async (val:boolean)=>{
      try{
        if(myUserID){
          await API.graphql(graphqlOperation(updateUser,{
            input:{
              id:myUserID,
              online:val
            }
          }))
        }
      }catch(err){
        console.log(err);
      }
    },[myUserID])

    // const changeNavColor = useCallback(()=>{
    //     try{
    //         changeNavigationBarColor(theme.theme.backgroundColor,lightKeys,true)
    //     }catch(e){
    //         console.log(e);
    //     }
    // },[lightKeys])

    // useEffect(()=>{
    //     changeNavColor()
    // },[changeNavColor])

    const fetchThemeFormat = useCallback(async()=>{
      try{
        const themeFormat = await AsyncStorage.getItem('@themeFormat')
        if(themeFormat!=null){
          if(themeFormat==="System default"){
            const colorScheme = Appearance.getColorScheme()
            if(colorScheme==='dark'){
              theme.setMode('dark')
              theme.setTheme(dark.theme)
            }else{
              theme.setMode('light')
              theme.setTheme(light.theme)
            }
          }else if(themeFormat==="Light"){
            theme.setMode('light')
            theme.setTheme(light.theme)
          }else if(themeFormat==="Dark"){
            theme.setMode('dark')
            theme.setTheme(dark.theme)
          }
        
          dispatch(setThemeFormat(themeFormat))
        }
      }catch(err){
        console.log(err);
      }
    },[])

    const fetchUserDetails = useCallback(async ()=>{ //for fetching currently logged in user details
      try{
        const userDetails = await Auth.currentAuthenticatedUser({bypassCache:true})
        return userDetails
      }catch(err){
        dispatch(setUserInfo({}))
        setShowLoadingScreen(false)
        console.log("You na",err);
      }
    },[])
    
    const createUserInDb = useCallback(async (newUser:object)=>{//for creating user in db if not exist
      try{
        await API.graphql(graphqlOperation(createUser,{input:newUser}))
      }catch(err){
        console.log(err);
      }
    },[])
    
    const getUserData = useCallback(async ()=>{ //for fetching currently logged in user data from db
      const userDetails = await fetchUserDetails()
      
      if(userDetails){
        const userId = userDetails.attributes.sub
        try{
          const userData = await API.graphql(graphqlOperation(getUser,{id:userId}))
          if(userData.data.getUser){
            const userInfo = {
              id:userData.data.getUser.id,
              name:userData.data.getUser.name,
              imageUri:userData.data.getUser.imageUri,
              status:userData.data.getUser.status,
              online:userData.data.getUser.online
            }
            setMyUserID(userInfo.id)
            dispatch(setUserInfo(userInfo))
          }else{
            const userName = userDetails.username.slice(0,15);
            const newUser = {
              id: userId,
              name:userName,
              imageUri:DefaultImages.person,
              status:"Let's chAt.",
              online:true
            }
            await createUserInDb(newUser)
            setMyUserID(newUser.id)
            dispatch(setUserInfo(newUser))
          }          
        }catch(err){
          console.log(err);
        }
      }
      setShowLoadingScreen(false)
    },[])
    
    useEffect(()=>{
      fetchThemeFormat()
      getUserData()
    },[getUserData,fetchThemeFormat])

    useEffect(()=>{
      if(myUserID){
        handleOnlineStatus(true)
      }
    },[myUserID])
    
    LogBox.ignoreLogs(["Setting a timer"])

    if(showLoadingScreen){
      return <LoadingPage/>
    }
    
    return(
      <View style={styles.container}>
          <StatusBar barStyle={theme.mode==='dark'?'light-content':'dark-content'} backgroundColor={theme.theme.backgroundColor}/>
          <NavigationContainer>
              {
                Object.keys(user).length ? <HomeNavigator/> : <AuthNavigator/>
              }
          </NavigationContainer>
      </View>
    )
}