import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { resetGame } from "../store/redux/trivia";

import { MAIN_STYLES } from "../constants/styles";
import UIButton from "../components/ui/UIButton";
import { SCREEN_NAMES } from "../constants/screens";

export default function GameOver({ navigation }) {
    const dispatch = useDispatch();

    const finalScore = useSelector((state) => state.trivia.score);
    const maxScore = useSelector((state) => state.trivia.maxScore);

    function handleOnStartOverPress() {
        dispatch(resetGame({}));
        navigation.replace(SCREEN_NAMES.home);
    }

    return (
        <View style={MAIN_STYLES.root}>
            <Text style={MAIN_STYLES.h2}>
                You got <Text style={MAIN_STYLES.h2_Bold}>{finalScore}</Text>{" "}
                out of <Text style={MAIN_STYLES.h2_Bold}>{maxScore}</Text>
            </Text>
            <UIButton handleOnPress={handleOnStartOverPress}>Go Home</UIButton>
        </View>
    );
}
