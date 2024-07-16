import { Text, View } from "react-native";
import { MainStyle } from "../../styles/MainStyle";
import { useContext } from "react";
import { UserFeelLikeContext, WeatherContext } from "../../App";
import { UserFeelData, UserHumidity, UserWeather, UserWindSpeed } from "../../config/User";

export default function Home() {

    const [weather, setWeather] = useContext(WeatherContext);
    const [feelLike, setFeelLike] = useContext(UserFeelLikeContext);

    return (
        <View style={ MainStyle.body }>
            { UserFeelData(feelLike, weather) }
            { UserWeather(weather) }
            { UserHumidity(weather) }
            { UserWindSpeed(weather) }
        </View>
    );
}