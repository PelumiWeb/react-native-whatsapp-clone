import * as React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import ChatListItem from '../components/ChatListItem/index';
import ChatRooms from '../data/ChatRooms';

export default function ChatScreen() {
  return (
    <View>
      <FlatList
      style={{width: '100%'}}
      data={ChatRooms}
      renderItem={({item}) => 
     <ChatListItem ChatRoom={item}/> 
      }
      keyExtractor={(item) => item.id}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({

});
