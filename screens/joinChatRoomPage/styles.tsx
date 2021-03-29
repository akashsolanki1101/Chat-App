import {StyleSheet} from 'react-native'

import {useTheme} from '../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                flex:1,
                backgroundColor:theme.theme.backgroundColor
            },
            contentContainer:{
                flex:1,
            },
            headingTextContainer:{
                marginBottom:25
            },
            titleContainer:{
                width:'100%',
                justifyContent:'center',
                alignItems:'center',
                marginBottom:10,
            },
            titleText:{
                fontSize:25,
                color:theme.theme.primaryTextColor,
                fontWeight:'bold'
            },
            secondaryTextContainer:{
                width:'100%',
                justifyContent:'center',
                alignItems:'center'
            },
            secondaryText:{
                color:theme.theme.secondaryTextColor,
                fontWeight:'bold'
            },
            inputBoxContainer:{
                paddingHorizontal:20,   
                marginBottom:25
            },
            inputBox:{
                backgroundColor:"rgba(0,0,0,0.2)",
                paddingHorizontal:10,
                paddingVertical:8,
                borderRadius:5 
            },
            inputBoxText:{
                color:theme.theme.secondaryTextColor,
                fontSize:12,
            },
            textInput:{
                color:theme.theme.primaryTextColor,
            },
            buttonContainer:{
                width:'100%',
                paddingHorizontal:20
            },
            button:{
               justifyContent:'center',
               alignItems:'center',
               backgroundColor:theme.theme.receiver,
               paddingVertical:15,
               borderRadius:5,
               elevation:2
            },
            buttonText:{
                color:theme.theme.activeColor,
                fontWeight:'bold',
                fontSize:15
            },
        })
    )
}