import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import {User} from '../../types'
import styles from './style'



export type ContactListItemProps = {
user: User
}

const ContactListItem = (props: ContactListItemProps) =>{
    const {user} = props
    const navigation = useNavigation()

    const onClick = () => {
    
    }
    return (
        <TouchableWithoutFeedback onPress={onClick}> 
        <View style={styles.container}>
            <View style={styles.leftContainer}> 
            <Image source={{uri: user.imageUri}} style={styles.avatar} />
            <View style={styles.midContainer}> 
            <Text> {user.name}</Text >
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.lastMessage}>{user.status}</Text>
            </View>
            </View>
        </View>
        </TouchableWithoutFeedback>

    )
}

export default ContactListItem

