import * as Location from 'expo-location';
import { KEY } from '../secret/secret';
import axios from 'axios';

export const locateApi = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        setPermission(false);
    }

    const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps: false});

    return location[0].city
}

export const weatherApi = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&lang=kr&units=metric`
    const res = await axios.get(url)
    return {
        temp: res.data.main.temp,
        weather: res.data['weather'][0].description,
        feels_like: res.data.main.feels_like,
        temp_max: res.data.main.temp_max,
        temp_min: res.data.main.temp_min,

        humidity: res.data.main.humidity,
        wind_speed: res.data.wind.speed
    }
}