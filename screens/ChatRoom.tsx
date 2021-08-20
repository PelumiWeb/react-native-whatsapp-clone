import { useRoute } from '@react-navigation/native'
import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, ImageBackground} from 'react-native'
import ChatMessage from '../components/ChatMessage/index'
// import Chats from '../data/Chats'
import BG from '../assets/images/BG.png'
import InputBox from '../components/InputBox'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { messagesByChatRoom } from '../src/graphql/queries'

const ChatRoomScreen = () => {
    const route = useRoute()
    const [messages, setMessages] = useState([])
    const [myId, setMyId] = useState(null)


    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const messagesData = await API.graphql(
                    graphqlOperation(
                        messagesByChatRoom, {
                            chatRoomID: route.params.id,
                            sortDirection: "DESC"
      
                        }
                    )
                )  
          setMessages(messagesData.data.messagesByChatRoom.items)
    console.log(messagesData)

            }catch (e) {
                console.log(e)
            }
          
        }
        fetchMessage()

        console.log('This is a message')

    }, [])

    useEffect(() => {
        const getMyId = async () => {
            const userInfo = await Auth.currentAuthenticatedUser()
            setMyId(userInfo.attributes.sub)
        }
        getMyId()

    }, [])
    return (
        <ImageBackground style={{width: '100%', height:'100%'}} source={BG}> 
        <FlatList
        data={messages}
        renderItem={({item}) => (
           <ChatMessage myId={myId} messages={item}/>
        )}
        inverted
        />
        <InputBox chatRoomID={route.params.id} />
        </ImageBackground>
       
    
)
}

export default ChatRoomScreen