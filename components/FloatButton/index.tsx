import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const index = () => {
    const navigation = useNavigation()
    const onPress = () => {
    navigation.navigate('Contact')
    }
    return (
        <TouchableOpacity onPress={onPress}>
       <View style={styles.container}>
           <Entypo name="message" size={28} color="#fff" />
        </View>
        </TouchableOpacity>
        
    )
}

export default index
