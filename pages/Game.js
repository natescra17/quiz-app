import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addPoints } from "../store/redux/trivia";

import { MAIN_STYLES } from "../constants/styles";
import UIQuestion from "../components/ui/UIQuestion";
import UIButton from "../components/ui/UIButton";
import { useState } from "react";
import { SCREEN_NAMES } from "../constants/screens";

export default function Game({ navigation }) {
    const dispatch = useDispatch();
    const game = useSelector((state) => state.trivia.questions);

    const [currentQuestion, setCurrentQuestion] = useState(game[0]);
    const [showContinue, setShowContinue] = useState(false);

    function handleOnPress() {
        setShowContinue(false);
        const currentQuestionIndex = game.indexOf(currentQuestion);
        if (currentQuestionIndex < game.length - 1) {
            setCurrentQuestion(game[currentQuestionIndex + 1]);
        } else {
            // navigate to result
            navigation.replace(SCREEN_NAMES.game_over);
        }
    }

    function handleUserPicks(scoreGain) {
        setShowContinue(true);
        dispatch(addPoints({ points: scoreGain }));
    }

    return (
        <View style={[MAIN_STYLES.root, { justifyContent: "flex-start" }]}>
            <UIQuestion
                question={currentQuestion}
                questionNumber={game.indexOf(currentQuestion) + 1}
                total={game.length}
                handleOnOptionSelected={handleUserPicks}
            />

            {showContinue && (
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <UIButton handleOnPress={handleOnPress}>
                        {game.indexOf(currentQuestion) < game.length - 1
                            ? "Continue"
                            : "Finish"}
                    </UIButton>
                </View>
            )}
        </View>
    );
}
