import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { MainStyle } from '../styles/MainStyle';
import { useContext, useEffect } from 'react';
import { CITY } from '../App';
import { locateApi } from '../config/Api';
import icon from '../config/icon.png';

export default function Header() {
    const [city, setCity] = useContext(CITY);
    
    useEffect(() => {
        locateApi()
        .then(res => {
            setCity(res);
        })
    }, []);

    return (
        <View style={ MainStyle.header }>
            <StatusBar/>
            <Image source={ icon } style={{width: 70, height: 70,}}/>
            {/* <Text style={MainStyle.titleText}>{ city }</Text> */}
        </View>
    );
}