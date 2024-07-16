import { Text, View } from 'react-native';
import { MainStyle } from '../styles/MainStyle';
import { getItem } from '../config/UserData';
import { useEffect, useState } from 'react';
import { weatherApi } from '../config/Api';
import { UserFeelData, UserHumidity, UserWeather, UserWindSpeed } from '../config/User';

export default function MainPage() {
    const[userData, setUserData] = useState();
    const[weatherData, setWeatherData] = useState({})

    useEffect(() => {
        getItem("UserFeelTemp")
        .then(res => {
            setUserData(res)
        })

        weatherApi("busan")
        .then(res => {
            setWeatherData(res)
        })
    }, []);
    
    return (
        <View style={MainStyle.body}>
            <Text>{ UserFeelData(userData, weatherData) }</Text>
            <Text>{ UserWeather(weatherData) }</Text>
            <Text>{ UserHumidity(weatherData) }</Text>
            <Text>{ UserWindSpeed(weatherData) }</Text>
        </View>
    );
}