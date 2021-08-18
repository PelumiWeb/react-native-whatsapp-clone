import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import {User} from '../../types'
import {API, graphqlOperation, Auth} from 'aws-amplify' 
import {createChatRoom, createChatRoomUser,} from '../../src/graphql/mutations'
import styles from './style'
import { navigate } from '@react-navigation/routers/lib/typescript/src/CommonActions'



export type ContactListItemProps = {
user: User
}

const ContactListItem = (props: ContactListItemProps) =>{
    const {user} = props
    const navigation = useNavigation()

    const onClick = async () => {
        try {
            //Create a new chatRoom
            const newChatRoomData = await API.graphql(
                graphqlOperation(
                    createChatRoom,
                    {
                        input: {}
                }
                )
            )
          if (!newChatRoomData.data)
                {
                    console.log('failed to create a chatRoom')
                    return
                }

            const newChatRoom = newChatRoomData.data.createChatRoom
            //Add 'user' to the chat Room
           await API.graphql(
                graphqlOperation(
                    createChatRoomUser, {
                        input : {
                            userID: user.id ,
                            chatRoomID: newChatRoom.id,  
                        }
                    }
                )
            )

            //Add authenticated user to the chat Room
            const userInfo = await Auth.currentAuthenticatedUser()
            await API.graphql(
                graphqlOperation(
                    createChatRoomUser, {
                        input : {
                        userID: userInfo.attributes.sub ,
                        chatRoomID: newChatRoom.id,
                        }
                      
                    }
                )
            )

            navigation.navigate('ChatRoom', {
                id: newChatRoom.id,
                name: 'Hardcoded name'
            })

        } catch(e){
            console.log(e)
        }
    }
    return (
        <TouchableWithoutFeedback onPress={onClick}> 
        <View style={styles.container}>
            <View style={styles.leftContainer}> 
            <Image source={{uri: user.imageUri}} style={styles.avatar} />
            <View style={styles.midContainer}> 
            <Text> {user.name}</Text >
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.lastMessage}>{user.status}</Text>
            </View>
            </View>
        </View>
        </TouchableWithoutFeedback>

    )
}

export default ContactListItem

