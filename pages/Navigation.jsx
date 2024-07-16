import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyPage from './MainPages/MyPage';
import Home from './MainPages/Home';
import { Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { locateApi, weatherApi } from '../config/Api';

import { CityContext, UserFeelLikeContext, WeatherContext } from '../App';

import icon from '../assets/icon.png';
import { getItem, setItem } from '../config/UserData';

export default function Navigation() {

  const [city, setCity] = useContext(CityContext);
  const [feelLike, setFeelLike] = useContext(UserFeelLikeContext);
  const [weather, setWeather] = useContext(WeatherContext);
    
  useEffect(() => {
      locateApi().then(res => {
        weatherApi(res).then(res => setWeather(res))
        setCity(res)
      })
      getItem("feel_like").then(res => setFeelLike(res))
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

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ Home } options={ HomeScreenOptions } />
        <Stack.Screen name="MyPage" component={ MyPage } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
