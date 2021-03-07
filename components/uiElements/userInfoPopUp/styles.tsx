import {StyleSheet} from 'react-native'

import {useTheme} from '../../../hooks/themeProvider/themeProvider'

export const useStyles = ()=>{
    const theme = useTheme()

    return(
        StyleSheet.create({
            container:{
                flex:1,
                justifyContent:'flex-end',
                paddingHorizontal:18,
                paddingVertical:15,
            },
            infoPopUp:{
                width:'100%',
            },
            profileImageContainer:{
                alignItems:'center'
            },
            imageBackground:{
                width:'100%',
                height:'45%',
                backgroundColor:theme.theme.receiver,
                position:'absolute',
                bottom:0
            },
            imageWrapper:{
                borderRadius:14,
                elevation:50,
                overflow:'hidden'
            },
            profileImage:{
                width:200,
                height:200,
                borderRadius:14,
            },
            userInfo:{
                width:'100%',
                paddingVertical:15,
                backgroundColor:theme.theme.receiver
            },
            nameContainer:{
                justifyContent:'center',
                alignItems:'center',
            },
            nameText:{
                color:theme.theme.primaryTextColor,
                fontWeight:'bold',
                fontSize:22
            },
            aboutContainer:{
                paddingHorizontal:18,
                marginTop:10
            },
            aboutTitleText:{
                color:theme.theme.activeColor,
                fontSize:18,
                fontWeight:'bold'
            },
            aboutText:{
                color:theme.theme.secondaryTextColor,
            },
            closeButtonContainer:{
                width:'100%',
                borderRadius:4,
                overflow:'hidden',
                marginTop:18
            },
            closeButton:{
                paddingVertical:10,
                borderRadius:4,
                backgroundColor:theme.theme.receiver,
                justifyContent:'center',
                alignItems:'center'
            },
            closeButtonText:{
                color:theme.theme.primaryTextColor,
                fontSize:16,
                fontWeight:'bold',

            }
        })
    )
}