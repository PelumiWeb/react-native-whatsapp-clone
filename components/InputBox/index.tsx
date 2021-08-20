import { FontAwesome5, Fontisto, MaterialCommunityIcons, Entypo, MaterialIcons } from '@expo/vector-icons'
import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './style'
import {API, Auth, graphqlOperation} from 'aws-amplify'
import { createMessage } from '../../src/graphql/mutations'

const index = ({chatRoomID}) => {
    const [text, setText] = useState('')
    const [userId, setUserId] = useState(null)
    console.log(chatRoomID)

    // const {chatRoomID} = props
        useEffect(() => {
        const fetchUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser()
        setUserId(userInfo.attributes.sub)
        }
        fetchUser()
        }, [])

        const onMicrophonePress = () => {
        console.warn('Microphone was pressed')
        }

const onSendPress = async () => {

    try {
        await API.graphql(graphqlOperation(createMessage, {
            input : {
                content: text,
                userID: userId,
                chatRoomID 

            }
        }))
    }catch (e) {

    }
    setText('')
}

const onPress = () => {
    if (!text) {
        onMicrophonePress()
    } else {
        onSendPress()
    }
}

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name='laugh-beam' size={22} color='gray' />
                <TextInput
                placeholder='Type a message'
                value={text}
                onChangeText={setText}
                multiline 
                // numberOfLines={4}
                style={styles.textInput}/>
                <Entypo name="attachment" size={22} color="gray" style={styles.icon} />
                {!text && <Fontisto name='camera' size={22} color='gray' style={styles.icon}/>}

            </View>
            <TouchableOpacity onPress={onPress}> 
            <View style={styles.buttonIcon}>
                {text ? 
            <MaterialIcons name='send' size={28} color='white'/>
            :
            <FontAwesome5 name="microphone" size={22} color="white" />
            } 
            
            </View>
            </TouchableOpacity>
           
        </View>
    )
}

export default index
