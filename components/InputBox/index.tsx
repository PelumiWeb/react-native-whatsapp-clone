import { FontAwesome5, Fontisto, MaterialCommunityIcons, Entypo, MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './style'

const index = () => {
    const [text, setText] = useState('')
//    const handleText = () => {
//        setText()
//    }
const onMicrophonePress = () => {
console.warn('Microphone was pressed')
}

const onSendPress = () => {
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
