import React from 'react'

import {View,Text,TouchableNativeFeedback,FlatList} from 'react-native'

import {useStyles} from './styles'

export const DropDown = ({data})=>{
    const styles = useStyles()

    return(
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item=>item.title}
                renderItem={({item})=>{
                    return(
                        <View style={styles.listItemContainer} >
                        <TouchableNativeFeedback
                            onPress={item.func}
                        >
                            <View style={styles.listItem}>
                                <Text style={styles.listItemText}>{item.title}</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    )
                }}
            />
        </View>
    )
}