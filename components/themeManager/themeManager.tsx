import React,{useState,useEffect} from 'react'

import {StatusBar} from 'react-native'
import {Appearance,AppearanceProvider} from 'react-native-appearance'
import {useSelector} from 'react-redux'

import {ThemeContext} from '../../hooks/themeProvider/themeProvider'
import {dark} from '../../ui/themes/dark'
import {light} from '../../ui/themes/light'

const ThemeManager1 = ({children})=>{
    const [theme,setTheme] = useState(dark.theme)
    const [themeMode,setThemeMode] = useState('dark')

    const themeFormat = useSelector(store=>store.themeFormat)
    console.log(themeFormat);

    const handleThemeModeChange = (mode:string)=>{
        setThemeMode(mode)
    }

    const handleThemeChange = (obj:object)=>{
        setTheme(obj)
    }

    useEffect(()=>{
        if(themeFormat==="System default"){
            const subscription = Appearance.addChangeListener(({colorScheme})=>{
                setThemeMode(colorScheme)
                console.log(colorScheme);
                
                if(colorScheme === 'dark'){
                    setTheme(dark.theme)
                }else if(colorScheme === 'light'){
                    setTheme(light.theme)
                }
            })
            return ()=> subscription.remove()
        }
    },[themeFormat])

    return(
        <ThemeContext.Provider value={{theme:theme,setTheme:handleThemeChange,mode:themeMode,setMode:handleThemeModeChange}}>
            <StatusBar barStyle={themeMode==='dark' ? "light-content":'dark-content'} backgroundColor={themeMode==='dark'?dark.theme.backgroundColor:light.theme.backgroundColor}/>
            {children}
        </ThemeContext.Provider>
    )
}

export const ThemeManager = ({children})=>{
    return(
        <AppearanceProvider>
            <ThemeManager1>{children}</ThemeManager1>
        </AppearanceProvider>
    )
}