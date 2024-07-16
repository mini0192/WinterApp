import { Text, View } from "react-native";
import { MainStyle } from "../../styles/MainStyle";
import { useContext, useEffect } from "react";
import { CITY } from "../Navigation";

export default function MyPage() {
    const [city, setCity] = useContext(CITY);

    return (
        <View style={ MainStyle.body }>
            <Text>{ city }</Text>
        </View>
    );
}