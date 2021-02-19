import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import {HomeScreen} from '../components/homeScreen/homeScreen'
import {ChatPage} from '../components/chatPage/chatPage'
import {SearchPage} from '../components/searchPage/searchPage'

const Stack = createStackNavigator()

export const HomeNavigator = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
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
        </Stack.Navigator>
    )
}