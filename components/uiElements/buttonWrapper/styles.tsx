import {StyleSheet} from 'react-native'

export const useStyles = ()=>{
    return(
        StyleSheet.create({
            container:{
                width:40,
                height:40,
                borderRadius:20,
                overflow:'hidden',
                justifyContent:'center',
                alignItems:'center'
            },
            buttonWrapper:{
                width:40,
                height:40,
                borderRadius:20,
                justifyContent:'center',
                alignItems:'center'
            }
        })
    )
}