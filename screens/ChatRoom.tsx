import { useRoute } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, FlatList, ImageBackground} from 'react-native'
import ChatMessage from '../components/ChatMessage/index'
import Chats from '../data/Chats'
import BG from '../assets/images/BG.png'
import InputBox from '../components/InputBox'

const ChatRoomScreen = () => {
    const route = useRoute()
    return (
        <ImageBackground style={{width: '100%', height:'100%'}} source={BG}> 
        <FlatList
        data={Chats.messages}
        renderItem={({item}) => (
           <ChatMessage messages={item}/>
        )}
        inverted
        />
        <InputBox />
        </ImageBackground>
       
    
)
}

export default ChatRoomScreen