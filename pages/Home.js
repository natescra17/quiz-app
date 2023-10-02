import { View, Text, StyleSheet, Alert } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { useLayoutEffect } from "react";
import { setUser } from "../store/redux/user";
import { resetGame, setTrivia } from "../store/redux/trivia";

import { MAIN_STYLES } from "../constants/styles";
import { COLORS } from "../constants/colors";
import { SCREEN_NAMES } from "../constants/screens";
import UIButton from "../components/ui/UIButton";
import UIIconButton from "../components/ui/UIIconButton";

import getTrivia from "../apis/trivia";

export default function Home({ navigation }) {
    const dispatch = useDispatch();

    const username = useSelector((state) => state.user.username);

    function handleLogOutOnPress() {
        dispatch(setUser({ username: "" }));
        dispatch(resetGame({}));
        navigation.replace(SCREEN_NAMES.login);
    }

    function handleNewGameOnPress() {
        dispatch(resetGame({}));

        getTrivia()
            .then((trivia) => {
                console.log("hiii");
                console.log(trivia);

                dispatch(setTrivia({ questions: trivia }));
                navigation.navigate(SCREEN_NAMES.quiz);
            })
            .catch((error) => {
                console.error(error);
                Alert.alert("Something went wrong", "Sorry please try again", [
                    { text: "Ok", style: "destructive" }
                ]);
            });
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <UIIconButton
                        onPressHandler={handleLogOutOnPress}
                        icon='exit'
                        color={COLORS.primary400}
                    />
                );
            }
        });
    }, []);

    return (
        <View style={MAIN_STYLES.root}>
            <Text style={[MAIN_STYLES.h2, styles.text]}>
                Welcome <Text style={MAIN_STYLES.h2_Bold}>{username}</Text>! are
                you ready for a new pop quiz round?
            </Text>
            <UIButton handleOnPress={handleNewGameOnPress}>Start!</UIButton>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        marginBottom: 18
    }
});
