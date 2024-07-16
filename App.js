import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import MainPage from './pages/MainPage';
import { MainStyle } from './styles/MainStyle';
import Header from './pages/Header';
import Bottom from './pages/Bottom';
import React, { createContext, useState } from "react";

export const CITY = createContext();

export default function App() {
  return (
    <View style={ MainStyle.container }>
      <CITY.Provider value={useState("도시")}>
        <Header/>
        <MainPage/>
        <Bottom/>
        <StatusBar style="auto" />
      </CITY.Provider>
    </View>
  );
}