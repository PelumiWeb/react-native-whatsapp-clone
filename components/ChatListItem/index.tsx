import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import {ChatRoom} from '../../types'
import styles from './style'



export type ChatListItemProps = {
ChatRoom: ChatRoom
}

const ChatListItem = (props: ChatListItemProps) =>{
    const {ChatRoom} = props
    const user = ChatRoom.users[1];
    const onClick = () => {
      navigation.navigate('ChatRoom', {id: ChatRoom.id,
    name: user.name})
    }
    const navigation = useNavigation()
    return (
        <TouchableWithoutFeedback onPress={onClick}> 
        <View style={styles.container}>
            <View style={styles.leftContainer}> 
            <Image source={{uri: user.imageUri}} style={styles.avatar} />
            <View style={styles.midContainer}> 
            <Text> {user.name}</Text >
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.lastMessage}>{ChatRoom.lastMessage.content}</Text>
            </View>
            </View>
            <View style={styles.rightContainer}> 
            <Text style={styles.time}>
               {moment(ChatRoom.lastMessage.createdAt).format("DD/MM/YY")}
            </Text>
            </View>
        </View>
        </TouchableWithoutFeedback>

    )
}

export default ChatListItem

