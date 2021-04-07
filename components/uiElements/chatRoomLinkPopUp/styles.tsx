import {StyleSheet} from 'react-native'

import {useTheme} from '../../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
            },
            popUpContainer:{
                backgroundColor:theme.theme.backgroundColor,
                width:350,
                paddingVertical:20,
                paddingHorizontal:20
            },
            header:{
                width:'100%',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                marginBottom:15
            },
            titleText:{
                fontSize:18,
                color:theme.theme.primaryTextColor
            },
            closeIcon:{
                color:theme.theme.primaryTextColor
            },
            idContainer:{
                flexDirection:'row',
                paddingHorizontal:20,
                paddingVertical:10,
                marginBottom:20,
                backgroundColor:'rgba(0,0,0,.2)',
                borderRadius:5 
            },
            idTextContainer:{
                width:'88%',
                overflow:'hidden',
                justifyContent:'center'
            },
            idText:{
                color:theme.theme.secondaryTextColor,
                fontSize:18,
                textAlignVertical:"center",
            },
            copyIcon:{
                color:theme.theme.secondaryTextColor
            },
            buttonContainer:{
                width:'100%',
            },
            button:{
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:theme.theme.receiver,
                paddingVertical:15,
                borderRadius:5,
                elevation:5
            },
            buttonText:{
                color:theme.theme.activeColor,
                fontWeight:'bold',
                fontSize:15
            }
            
        })
    )
}