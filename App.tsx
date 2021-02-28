import React,{useEffect,useCallback} from 'react';

import {ThemeManager} from './components/themeManager/themeManager'
import {Wrapper} from './components/layoutWrapper/wrapper'

import {
  Auth,
  API,
  graphqlOperation
} from 'aws-amplify'

import {getUser} from './graphql/queries'
import {createUser} from './graphql/mutations'
import {DefaultImages} from './constants/defaultImages/defaultImages'

import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify from 'aws-amplify'
import config from './aws-exports'

Amplify.configure(config)

const App = ()=>{

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
          return
        }else{
          const newUser = {
            id: userId,
            name:userDetails.username,
            imageUri:DefaultImages.person,
            status:"Let's chAt."
          }
          await createUserInDb(newUser)
        }
      }catch(err){
        console.log(err);
      }
    }
    
  },[])

  useEffect(()=>{
    getUserData()
  },[getUserData])

  return (
    <ThemeManager>
      <Wrapper/>
    </ThemeManager>
  );
}

export default withAuthenticator(App)


