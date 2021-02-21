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
                height:200,
                backgroundColor:theme.theme.receiver
            },
            nameAndNumberContainer:{
                justifyContent:'center',
                alignItems:'center',
                // borderWidth:1,
                paddingVertical:5
            },
            nameText:{
                color:theme.theme.primaryTextColor,
                fontWeight:'bold',
            },
            numberText:{
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