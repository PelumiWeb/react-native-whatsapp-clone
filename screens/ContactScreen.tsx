import * as React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import ContactListItem from '../components/ContactListItem';
import users from '../data/Users';


export default function ChatScreen() {
  return (
    <View>
         <FlatList
      style={{width: '100%'}}
      data={users}
      renderItem={({item}) => 
     <ContactListItem user={item}/> 
      }
      keyExtractor={(item) => item.id}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({

});
