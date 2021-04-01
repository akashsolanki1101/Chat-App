import {StyleSheet} from 'react-native'

import {useTheme} from '../../../hooks/themeProvider/themeProvider'

export  const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                flex:1,
                backgroundColor:theme.theme.backgroundColor,
            },
            header:{
                paddingHorizontal:18,
                paddingVertical:14,
                marginBottom:20
            },
            appNameStyle:{
                fontSize:45
            },
            form:{
                // borderWidth:1,
                // borderColor:'white',
                paddingHorizontal:18,
            },
            formElement:{
                marginBottom:25
            },
            inputNameText:{
                color:theme.theme.primaryTextColor,
                fontSize:16,
                marginBottom:10,
                fontWeight:'bold'
            },
            inputBoxContainer:{
                backgroundColor:"rgba(0,0,0,0.2)",
                paddingHorizontal:10,
                paddingVertical:15,
                borderRadius:10,
                borderWidth:1,
                borderColor:theme.theme.secondaryTextColor,
                // elevation:1,
            },
            inputBox:{
                paddingLeft:5,
                color:theme.theme.primaryTextColor,
            },
            buttonContainer:{
                width:'100%',
                marginTop:20
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
                fontSize:16
            },
            signupButtonContainer:{
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                marginTop:15
            },
            qText:{
                fontSize:16,
                color:theme.theme.secondaryTextColor
            },
            signupButtonText:{
                fontSize:16,
                color:theme.theme.primaryTextColor,
                fontWeight:'bold',
            }
        })
    )
}