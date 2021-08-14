import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import Colors from '../constants/Colors';
import {View} from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 


import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ 
      headerStyle: {
        backgroundColor: Colors.light.tint,
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
      }}>
      <Stack.Screen
      name="Root" 
      component={BottomTabNavigator} 
      options={{
        title: 'WhatsApp',
        headerRight: () => (
          <View style={{display: 'flex', flexDirection: 
          'row', width: 60, justifyContent: 'space-between', marginRight: 10, alignItems: 'center'}}>
            <EvilIcons name="search" size={24} color={Colors.light.background} />
          <Feather name="more-vertical" size={24} color={Colors.light.background} />
          </View>
        )
      }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
