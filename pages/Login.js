import { View, Text, StyleSheet } from "react-native";

import { useDispatch } from "react-redux";
import { setUser } from "../store/redux/user";

import { MAIN_STYLES } from "../constants/styles";
import UIButton from "../components/ui/UIButton";
import { SCREEN_NAMES } from "../constants/screens";
import { useState } from "react";
import UITextInput from "../components/ui/UITextInput";

export default function Login({ navigation }) {
    const dispatch = useDispatch();

    const [inputValues, setInputValues] = useState({
        password: "",
        username: ""
    });

    function inputValuesHandler(inputIdentifier, enteredValue) {
        setInputValues((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifier]: enteredValue
            };
        });
    }

    const [usernameError, setUsernameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    function validateFields() {
        let valid = false;
        if (inputValues.username.length === 0) {
            setUsernameError("Required field");
        } else {
            setUsernameError(null);
        }

        if (inputValues.password.length === 0) {
            setPasswordError("Required field");
        } else {
            setPasswordError(null);
        }

        if (usernameError === null && passwordError === null) {
            valid = true;
        }

        console.log(inputValues, usernameError, passwordError);
        console.log(valid);
        return valid;
    }

    function handleSingInOnPress() {
        if (validateFields()) {
            dispatch(setUser({ username: inputValues.username }));
            navigation.replace(SCREEN_NAMES.home);
        }
    }

    return (
        <View style={MAIN_STYLES.root}>
            <Text style={MAIN_STYLES.h1}> Welcome!</Text>
            <UITextInput
                label='username'
                error={usernameError}
                inputParams={{
                    autoCorrect: false,
                    autoCapitalize: "none",
                    onChangeText: inputValuesHandler.bind(this, "username"),
                    value: inputValues.username
                }}
            />
            <UITextInput
                label='password'
                error={passwordError}
                inputParams={{
                    autoCorrect: false,
                    autoCapitalize: "none",
                    onChangeText: inputValuesHandler.bind(this, "password"),
                    value: inputValues.password,
                    secureTextEntry: true
                }}
            />
            <UIButton handleOnPress={handleSingInOnPress}>Sign In</UIButton>
        </View>
    );
}

const styles = StyleSheet.create({});
