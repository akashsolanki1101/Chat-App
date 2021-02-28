import React,{useEffect,useState,useCallback} from 'react'

import {View,FlatList} from 'react-native'

import {API,graphqlOperation} from 'aws-amplify'
import {listUsers} from '../../graphql/queries'

import {useStyles} from './styles'
import {Header} from '../../components/uiElements/header/header'
import { ContactsListItem } from '../../components/uiElements/contactsListItem/contactsListItem'

export const ContactsPage = ({navigation})=>{
    const styles = useStyles()

    const [contacts,setContacts] = useState([])

    const fetchContacts = useCallback(async ()=>{
        try{
            const contacts = await API.graphql(graphqlOperation(listUsers))
            setContacts(contacts.data.listUsers.items)
        }catch(err){
            console.log(err);
        }
    },[])

    useEffect(()=>{
        fetchContacts()
    },[fetchContacts])

    return(
        <View style={styles.container}>
            <Header
                navigation={navigation}
                title={"Contacts"}
            />
            <View style={styles.contactsListContainer}>
                <FlatList
                    data={contacts}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=>{
                        return(
                            <ContactsListItem
                                user={item}
                                navigation={navigation}
                            />
                        )
                    }}
                />
            </View>
        </View>
    )
}