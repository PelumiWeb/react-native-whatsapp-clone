import {StyleSheet} from 'react-native'
import  Colors  from '../../constants/Colors'

const styles = StyleSheet.create({
container: {
    flexDirection: 'row',
    alignItems: 'center',
},
mainContainer: {
    flexDirection: 'row', 
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 40,
    marginRight: 10,
    flex: 1,
    alignItems: 'flex-end',
},
textInput: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'flex-end',

},
icon: {
margin: 5,
},
buttonIcon: {
    backgroundColor: Colors.light.tint,
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
}
})

export default styles