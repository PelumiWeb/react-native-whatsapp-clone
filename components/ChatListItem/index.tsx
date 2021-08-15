import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import {ChatRoom} from '../../types'
import styles from './style'



export type ChatListItemProps = {
ChatRoom: ChatRoom
}

const ChatListItem = (props: ChatListItemProps) =>{
    const {ChatRoom} = props
    const user = ChatRoom.users[1];
    return (
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
               {ChatRoom.lastMessage.createdAt}
            </Text>
            </View>
        </View>
    )
}

export default ChatListItem

