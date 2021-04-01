import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import {HomePage} from '../screens/homePage/homePage'
import {ChatPage} from '../screens/chatPage/chatPage'
import {SearchPage} from '../screens/searchPage/searchPage'
import {SettingsPage} from '../screens/settingsPage/settingsPage'
import {CreateChatRoomPage} from '../screens/createChatRoomPage/CreateChatRoomPage'
import {JoinChatRoomPage} from '../screens/joinChatRoomPage/joinChatRoomPage'
import {SignInPage} from '../screens/auth/signInPage/signInPage'
import {SignUpPage} from '../screens/auth/signUpPage/signUpPage'

const Stack = createStackNavigator()

export const HomeNavigator = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="SignInPage"
                component={SignInPage}
                options={{
                    headerShown:false,                
                }}
            />

            <Stack.Screen
                name="SignUpPage"
                component={SignUpPage}
                options={{
                    headerShown:false,                
                }}
            />
            <Stack.Screen
                name="Home"
                component={HomePage}
                options={{
                    headerShown:false,
                }}
            />

            <Stack.Screen
                name="ChatPage"
                component={ChatPage}
                options={{
                    headerShown:false,
                }}
            />

            <Stack.Screen
                name="SearchPage"
                component={SearchPage}
                options={{
                    headerShown:false,
                }}
            />

            <Stack.Screen
                name="SettingsPage"
                component={SettingsPage}
                options={{
                    headerShown:false,                
                }}
            />

            <Stack.Screen
                name="CreateChatRoomPage"
                component={CreateChatRoomPage}
                options={{
                    headerShown:false,                
                }}
            />

            <Stack.Screen
                name="JoinChatRoomPage"
                component={JoinChatRoomPage}
                options={{
                    headerShown:false,                
                }}
            />

        </Stack.Navigator>
    )
}