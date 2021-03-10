import React,{useEffect,useCallback} from 'react'

import {View,StatusBar} from 'react-native'
// import changeNavigationBarColor from 'react-native-navigation-bar-color'
import {NavigationContainer} from '@react-navigation/native'
import {useDispatch} from 'react-redux'

import {Auth,API,graphqlOperation} from 'aws-amplify'
import {getUser} from '../../graphql/queries'
import {createUser} from '../../graphql/mutations'

// import {dark} from '../../ui/themes/dark'
// import {light} from '../../ui/themes/light'
import {useStyles} from './styles'
import {useTheme} from '../../hooks/themeProvider/themeProvider'
import {HomeNavigator} from '../../navigation/navigation'
import {DefaultImages} from '../../constants/defaultImages/defaultImages'
import {setUserInfo} from '../../store/actions/userInfo'

export const Wrapper = ()=>{
    const styles = useStyles()
    const theme = useTheme()
    const lightKeys = theme.mode==='dark'?false:true

    const dispatch = useDispatch()

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

    const fetchUserDetails = useCallback(async ()=>{ //for fetching currently logged in user details
        try{
          const userDetails = await Auth.currentAuthenticatedUser({bypassCache:true})
    
          return userDetails
        }catch(err){
          console.log(err);
        }
      },[])
    
      const createUserInDb = useCallback(async (newUser:object)=>{
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
              dispatch(setUserInfo(userData.data.getUser))
              return
            }else{
              const newUser = {
                id: userId,
                name:userDetails.username,
                imageUri:DefaultImages.person,
                status:"Let's chAt."
              }
              await createUserInDb(newUser)
              dispatch(setUserInfo(newUser))
            }
          }catch(err){
            console.log(err);
          }
        }
        
      },[])
    
      useEffect(()=>{
        getUserData()
      },[getUserData])

    

    return(
        <View style={styles.container}>
            <StatusBar barStyle={theme.mode==='dark'?'light-content':'dark-content'} backgroundColor={theme.theme.backgroundColor}/>
            <NavigationContainer>
                <HomeNavigator/>
            </NavigationContainer>
        </View>
    )
}