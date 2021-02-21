import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import {HomePage} from '../components/screens/homePage/homePage'
import {ChatPage} from '../components/screens/chatPage/chatPage'
import {SearchPage} from '../components/screens/searchPage/searchPage'
import {SettingsPage} from '../components/screens/settingsPage/settingsPage'

const Stack = createStackNavigator()

export const HomeNavigator = ()=>{
    return(
        <Stack.Navigator>
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
        </Stack.Navigator>
    )
}