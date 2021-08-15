    import {StyleSheet} from 'react-native'
    
    const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10
    },
    leftContainer: {
    flexDirection: 'row'
    }, 
    midContainer:{
     justifyContent: 'space-around',
    },
    rightContainer: {

    },
    avatar: {
        width: 60, 
        height: 60,
        borderRadius: 50,
        marginRight: 10
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16
    },
    lastMessage: {
        fontSize: 16,
        color: 'gray' ,
        flexShrink: 1,
        marginLeft: 4,
    },
    time: {
        fontSize: 16,
        color: 'gray' 
    }
    })

export default styles