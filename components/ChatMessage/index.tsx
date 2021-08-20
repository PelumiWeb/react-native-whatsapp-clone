import moment from 'moment'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Message } from '../../types'
import styles from './ChatMessage'

export type ChatMessageProps = {
    messages: Message

}

const ChatMessage = (props:ChatMessageProps) => {
    const { messages, myId } = props

    const isMyMessage = () => {
        return messages.user.id === myId
    }

    return (
        <View style={styles.container}>
            <View style={[styles.messageBox, {backgroundColor: isMyMessage() ?"#DCFBC5" : 'white',
            marginRight: isMyMessage() ? 0 : 50,
            marginLeft: isMyMessage() ? 50 : 0
            }
        ]}>
            {!isMyMessage() && <Text style={styles.name}>{messages.user.name}</Text>}
            <Text style={styles.content}>{messages.content}</Text>
            <Text style={styles.date}>{moment(messages.createdAt).fromNow()}</Text>
             </View>
            
        </View>
    )
}

export default ChatMessage
