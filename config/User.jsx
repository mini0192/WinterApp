import { Text, View } from "react-native";
import { MainStyle } from "../styles/MainStyle";

export const UserFeelData = (user_feel_like, weather) => {
    const user_feel = weather.feels_like - Number(user_feel_like);

    if(Math.abs(user_feel) < 2)
        return (
            <View style={{alignItems: 'center', justifyContent: "center"}}>
                <Text style={MainStyle.text}>오늘은 적당하다고 느끼실 온도에요!</Text>
                <Text style={MainStyle.text}>평소대로 입으시는 건 어떨까요?</Text>
            </View>
        )

    if(user_feel > 0)
        return (
            <View style={{alignItems: 'center', justifyContent: "center"}}>
                <Text style={MainStyle.text}>오늘은 덥다고 느끼실 것 같아요!</Text>
                <Text style={MainStyle.text}>평소보다 조금 더 얇게 입으시는건 어떨까요?</Text>
            </View>
        )

    if(user_feel < 0)
        return (
            <View style={{alignItems: 'center', justifyContent: "center"}}>
                <Text style={MainStyle.text}>오늘은 춥다고 느끼실 것 같아요!</Text>
                <Text style={MainStyle.text}>평소보다 조금 더 두껍게 입으시는건 어떨까요?</Text>
            </View>
        )

    return(<Text style={MainStyle.text}>맞춤형 날씨를 만들고 있어요~</Text>)
}


export const UserWeather = (weather) => {
    const user_weather = weather.weather
    if(user_weather === "온흐림")
        return(<Text style={MainStyle.text}>지금은 흐린 상태라 혹시 모르니 우산을 챙겨주세요!</Text>)
    if(user_weather === "맑음")
        return(<Text style={MainStyle.text}>지금은 맑은 상태라 오늘은 안심해도 될거 같아요!</Text>)
    return(<Text style={MainStyle.text}>날씨 정보를 받아오고 있어요~</Text>)
}


export const UserHumidity = (weather) => {
    const user_humidity = weather.humidity
    if(user_humidity > 80)
        return(<Text style={MainStyle.text}>오늘은 습한 편이라 실내에서 생활하시는 편이 좋아요!</Text>)
    if(user_humidity > 40)
        return(<Text style={MainStyle.text}>오늘은 적당히 습해서 야외 활동도 좋아보여요!</Text>)
    return(<Text style={MainStyle.text}>날씨 정보를 받아오고 있어요~</Text>)
}


export const UserWindSpeed = (weather) => {
    const user_wind_speed = weather.wind_speed
    if(user_wind_speed > 1)
        return(<Text style={MainStyle.text}>오늘은 바람이 많이 부는 편이에요</Text>)
    if(user_wind_speed <= 1)
        return(<Text style={MainStyle.text}>오늘은 선선한 바람이 불어요</Text>)

    return(<Text style={MainStyle.text}>날씨 정보를 받아오고 있어요~</Text>)
}