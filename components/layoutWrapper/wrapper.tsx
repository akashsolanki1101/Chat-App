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
    // const lightKeys = theme.mode==='dark'?false:true

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

    //*****It works only in bare react-native app*****//
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
          console.log("user Data",userData.data.getUser.pushToken);
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

/* 
Object {
  "data": Object {
    "getUser": Object {
      "chatRoomUser": Object {
        "items": Array [
          Object {
            "chatRoomID": "55c48e3c-91ac-40ae-b764-62760a37ab47",
            "createdAt": "2021-04-10T08:02:53.902Z",
            "id": "fb2f9e29-2282-456b-aaa1-a84716752e62",
            "updatedAt": "2021-04-10T08:02:53.902Z",
            "userID": "f33f4f77-7a46-4a0c-b00b-66b258244d98",
          },
          Object {
            "chatRoomID": "5813ecce-7e45-4099-9cc3-d3aa4802c68d",
            "createdAt": "2021-04-06T16:51:00.783Z",
            "id": "ac7c67bd-d9aa-4197-8bd2-905f74e29ff1",
            "updatedAt": "2021-04-06T16:51:00.783Z",
            "userID": "f33f4f77-7a46-4a0c-b00b-66b258244d98",
          },
          Object {
            "chatRoomID": "c3804ede-1ebd-44ff-a8ec-abd9d1ffd1dd",
            "createdAt": "2021-04-07T13:48:11.618Z",
            "id": "d1918c24-4833-4968-9687-44b4d8b127e1",
            "updatedAt": "2021-04-07T13:48:11.618Z",
            "userID": "f33f4f77-7a46-4a0c-b00b-66b258244d98",
          },
        ],
        "nextToken": null,
      },
      "createdAt": "2021-02-24T05:59:19.446Z",
      "id": "f33f4f77-7a46-4a0c-b00b-66b258244d98",
      "imageUri": "https://chatappcdd2d67b2b434500b94f622cc0d2a47e00944-dev.s3.us-east-1.amazonaws.com/public/f33f4f77-7a46-4a0c-b00b-66b258244d98/profilePhoto?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAUGZNFKGTVC45BJIY%2F20210420%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210420T061918Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLWVhc3QtMSJHMEUCIQCFWF2RxhZcK%2Bi7oME1iOqHVRg%2FIP49blbcKqjcvCuzRQIgUcq%2FNDr%2BY7OnXNnA79bHGdZYYXECaGblqTBnT%2Fc8C8QqzQQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyODk0NjgxNDE5OTEiDNMIhcs%2FBPWHo27BEyqhBCAUWyFHih3x30uYOTmZLBlttrgDRcZA1PPO0w%2B1clH6bYOZhwqvZJlqY0YI7g1NCtIpRmf7nJCF6ozCXumaPdTkdpfg33CkSB4r4L0odVg%2FJyXjBeRxR53mCY2juWdRP2QZTIpJkyRAqPDCeJ6TAWA9ZVNOXwDoqabD%2BsXdBHSN7CMkQXUovOM%2Faw%2B2bzO0hvNHrT6hkf5ryTKBh6M1fuCY1u6mhh%2FaAR1yPtTSTpMgzo2hUmFvWVc5kwGFS9OS2pUIx3IVMaVvZFatO8gpV8BUWLLps9p9crn%2FzvxlV3YqFaIWqkHiYnOFPoyVjztUkqDoxFoWivPfpz2NL0bXuHDdsuSrWXG6ojZj2f%2BOv%2FzWLqCFH5YlD3Zh5IJLf5eycG65HG4u%2FKVe4jz0eaoCDfRveIfucYk96hNQq7clUevR95EQEP9B53kKfofoHwZ90lkZpUnJWPW0%2FHtZLWvijQsHBW6zBVki4tFCRyVOa%2Bwy1zrSsH956lv3Chz%2BKj5AMEL5BXYGBUIgmUNx%2FWuNNUG9zh6n7jSb%2FzSEKQEwbIT3%2BP25Dx7ar1TcY%2F9av4kCffHes8GmN8knhzqe2yTlihj6BVJHmIQg3fgOqPryfsuB%2BTDMR2FuoMubATzlUksLUE1El%2BgcHLhc4aVoEyDFIQbWehcswNoU3p5YnzAcQytALGyPeuljkqZ2kywnrD8yp9bghuA35wwvPkcoqQXSbKvIMNbk%2BYMGOoUCZfD3JxehGvBvZHDSvNoKstRXMLkO%2FvfECKHEmqnOGAEgCO%2F76Io283ZHL%2B7xU3T40VZyVFo2e2AExBq8j%2FEG98SzjJ3o%2FCupi7IhpSgPHcgZgP%2FqxRMfNS7Txi%2BdnZa8KcegOUHuuWavEXmjMWcdADJdShsgxC5Bi8qinB9S5EF4N9g7i61UzSTMCVyIB5Q8cQBvRdbXWE4hlvwM7EoBhj6ozUNB%2FFTuqE0A2g2qZL2int1AOwvJywPE621smkXyWa3hDV5DTbpFAZM2RgzSUMiPW%2BOdRb5cXPXQXttamxtKTxM5GDX5Yhr2v0BDmWK841Ol5nCLUeNs0E0NYAH54tWTz%2ByR&X-Amz-Signature=85853c8806bed7e48c5b34484c077b09648a6bc05f2ed504df30605ba44ee3a3&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js%2F3.6.1%20os%2Fother%20lang%2Fjs%20md%2Fbrowser%2Funknown_unknown%20api%2Fs3%2F3.6.1%20aws-amplify%2F3.8.20_react-native&x-id=GetObject",
      "name": "Akash",
      "online": false,
      "pushToken": null,
      "status": "Let's chAt",
      "updatedAt": "2021-06-03T03:13:41.228Z",
    },
  },
}
*/