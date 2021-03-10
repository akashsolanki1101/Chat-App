import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import {HomePage} from '../screens/homePage/homePage'
import {ChatPage} from '../screens/chatPage/chatPage'
import {SearchPage} from '../screens/searchPage/searchPage'
import {SettingsPage} from '../screens/settingsPage/settingsPage'
import {ContactsPage} from '../screens/contactsPage/contactsPage'
import {ProfilePage} from '../screens/profilePage/profilePage'

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

            <Stack.Screen
                name="ContactsPage"
                component={ContactsPage}
                options={{
                    headerShown:false,
                }}
            />

            <Stack.Screen
                name="ProfilePage"
                component={ProfilePage}
                options={{
                    headerShown:false,
                }}
            />
        </Stack.Navigator>
    )
}