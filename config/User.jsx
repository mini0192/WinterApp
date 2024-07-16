import { Text } from "react-native";

export const UserFeelData = (user, weather) => {
    const user_feel = weather.feels_like - Number(user);

    if(Math.abs(user_feel) < 2)
        return (<Text>오늘은 적당한 온도에요!</Text>)

    if(user_feel > 0)
        return (<Text>오늘은 덥다고 느끼실 것 같아요!</Text>)

    if(user_feel < 0)
        return (<Text>오늘은 춥다고 느끼실 것 같아요!</Text>)
    return(<Text>맞춤형 날씨를 만들고 있어요~</Text>)
}


export const UserWeather = (weather) => {
    const user_weather = weather.weather
    if(user_weather === "온흐림")
        return(<Text>지금은 흐린 상태라 혹시 모르니 우산을 챙겨주세요!</Text>)
    return(<Text>날씨 정보를 받아오고 있어요~</Text>)
}


export const UserHumidity = (weather) => {
    const user_humidity = weather.humidity
    if(user_humidity > 80)
        return(<Text>오늘은 습도가 높은 편이라 실내에서 생활하시는 편이 좋아요!</Text>)
    return(<Text>날씨 정보를 받아오고 있어요~</Text>)
}


export const UserWindSpeed = (weather) => {
    const user_wind_speed = weather.wind_speed
    if(user_wind_speed > 1)
        return(<Text>오늘은 바람이 많이 부는 편이에요</Text>)
    if(user_wind_speed <= 1)
        return(<Text>오늘은 선선한 바람이 불어요</Text>)

    return(<Text>날씨 정보를 받아오고 있어요~</Text>)
}