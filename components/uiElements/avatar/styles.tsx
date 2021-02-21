import {StyleSheet} from 'react-native'

export const useStyles = ()=>{
    return(
        StyleSheet.create({
            container:{
                width : 60,
                height : 60,
                borderRadius: 30,
                overflow:'hidden',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            },
            image:{
                width : 60,
                height : 60,
                borderRadius: 30,
            }
        })
    )
}