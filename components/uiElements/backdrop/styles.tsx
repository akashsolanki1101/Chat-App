import {StyleSheet} from 'react-native'

export const useStyles = ()=>{
    return(
        StyleSheet.create({
            container:{
                width:'100%',
                height:'100%',
                backgroundColor:'rgba(0,0,0,0.7)',
                position:'absolute',
                top:0,
                left:0,
                elevation:2.1,
            }
        })
    )
}