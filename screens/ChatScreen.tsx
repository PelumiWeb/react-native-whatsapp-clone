import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import ChatListItem from '../components/ChatListItem/index';
import FloatButton from '../components/FloatButton';
import ChatRooms from '../data/ChatRooms';
import {API, graphqlOperation, Auth} from 'aws-amplify'
import {getUser} from './queries'

export default function ChatScreen() {
  const [chatRoom, setChatRoom] = useState([])
useEffect(() => {
const fetchChatRooms = async  () => {
try {
  const userInfo = await Auth.currentAuthenticatedUser()


  const userData = await API.graphql(
    graphqlOperation(
      getUser,
       {
        id: userInfo.attributes.sub
      }
    )
 
  )
  setChatRoom(userData.data.getUser.chatRoomUser.items )
  // console.log(chatRoom)

} catch (e) {
console.log(e)
}
}
fetchChatRooms()
}, [])


  return (
    <View style={{position: 'relative'}}>
      <FlatList
      style={{width: '100%'}}
      data={chatRoom}
      renderItem={({item}) => 
     <ChatListItem ChatRoom={item.chatRoom}/> 
      }
      keyExtractor={(item) => item.id}
      /> 
      <FloatButton />
    </View>
  );
}

const styles = StyleSheet.create({

});
