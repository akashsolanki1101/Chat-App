import {createContext,useContext} from 'react'

import {dark} from '../../ui/themes/dark'

const defaultMode = 'dark'
const defaultTheme = dark.theme

export const ThemeContext = createContext({
    theme: defaultTheme,
    setTheme:(obj:object)=>{},
    mode:defaultMode,
    setMode:(mode:string)=>{}
})

export const useTheme = ()=>useContext(ThemeContext)