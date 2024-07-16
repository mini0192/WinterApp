import { Text, View } from "react-native";
import { MainStyle } from "../../styles/MainStyle";
import { useContext } from "react";
import { CITY } from "../Navigation";

export default function Home() {
    const [city, setCity] = useContext(CITY);
    
    return (
        <View style={ MainStyle.body }>
            <Text>{ city }</Text>
            <Text>왜 안대</Text>
        </View>
    );
}