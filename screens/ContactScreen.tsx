import { API, graphqlOperation } from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import ContactListItem from '../components/ContactListItem';
// import users from '../data/Users';
import { listUsers } from '../src/graphql/queries';


export default function ChatScreen() {

  const [users, setUsers] = useState([])
  console.log(users)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await API.graphql(graphqlOperation(listUsers))
        setUsers(userData.data.listUsers.items)
      }catch (e) {
        console.log(e)
      }
    }

    fetchUser()

  }, [])

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
