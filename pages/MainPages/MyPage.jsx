import { Text, View } from "react-native";
import { MainStyle } from "../../styles/MainStyle";
import { CityContext, UserFeelLikeContext } from "../../App";
import { useContext } from "react";

export default function MyPage() {

    const [city, setCity] = useContext(CityContext);
    const [feelLike, setFeelLike] = useContext(UserFeelLikeContext);

    return (
        <View style={ MainStyle.body }>
            <Text style={ MainStyle.smallTitletext }>도시</Text>
            <Text style={ MainStyle.text }>{ city }</Text>

            <Text style={ MainStyle.smallTitletext }>나의 적정 온도</Text>
            <Text style={ MainStyle.text }>{ feelLike }</Text>
        </View>
    );
}