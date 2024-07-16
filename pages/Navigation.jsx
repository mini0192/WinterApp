import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyPage from './MainPages/MyPage';
import Home from './MainPages/Home';
import { Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import icon from '../assets/icon.png';
import { locateApi } from '../config/Api';

export const CITY = React.createContext("CITY");

export default function Navigation() {
  const Stack = createNativeStackNavigator();

  const [city, setCity] = useContext(CITY);
    
  useEffect(() => {
      locateApi()
      .then(res => {
          setCity(res);
      })
  }, []);

  const HomeScreenOptions = ({ navigation }) => ({
    headerTitle: () => (
      <Image source={icon} style={{ width: 40, height: 40 }} resizeMode="contain" />
    ),
    headerRight: () => (
      <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.navigate('MyPage')}>
        <Ionicons name="person-circle-outline" size={32} color="#3C4E59" />
      </TouchableOpacity>
    ),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ Home } options={ HomeScreenOptions } />
        <Stack.Screen name="MyPage" component={ MyPage } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
