import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import {ChatRoom} from '../../types'
import styles from './style'
import {Auth} from 'aws-amplify'



export type ChatListItemProps = {
ChatRoom: ChatRoom
}

const ChatListItem = (props: ChatListItemProps) =>{
    const {ChatRoom} = props
    // const user = ChatRoom.chatRoomUsers.items[0].user;
    const navigation = useNavigation()
    const [otherUser, setOtherUser] = useState(null)

    const onClick = () => {
      navigation.navigate('ChatRoom', {id: ChatRoom.id,
    name: otherUser.name})
    }

    useEffect(() => {
        const getUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser()
            if (ChatRoom.chatRoomUsers.items[0].user.id === userInfo.attributes.sub) {
                setOtherUser(ChatRoom.chatRoomUsers.items[1].user)
            } else {
                const user = chatRoom.chatRoomUsers.items[0].user;
            }
        }
        getUser()

    }, [])
    if (!otherUser) {
        return null
    }
    return (
        <TouchableWithoutFeedback onPress={onClick}> 
        <View style={styles.container}>
            <View style={styles.leftContainer}> 
            <Image source={{uri: otherUser.imageUrl}} style={styles.avatar} />
            <View style={styles.midContainer}> 
            <Text> {otherUser.name}</Text >
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.lastMessage}>{ChatRoom.lastMessage ? ChatRoom.lastMessage.content : ""}</Text>
            </View>
            </View>
            <View style={styles.rightContainer}> 
            <Text style={styles.time}>
               {moment(ChatRoom.lastMessage && ChatRoom.lastMessage.createdAt).format("DD/MM/YY")}
            </Text>
            </View>
        </View>
        </TouchableWithoutFeedback>

    )
}

export default ChatListItem

