import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export default function UITextInput({ error, label, inputParams }) {
    return (
        <View style={styles.root}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholderTextColor={COLORS.secondary500}
                {...inputParams}
            />
            {error && <Text style={styles.errorMsg}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: "75%",
        marginVertical: 18
    },
    label: {
        color: COLORS.secondary500,
        marginHorizontal: 15,
        marginVertical: 4,
        textTransform: "capitalize",
        fontFamily: "hand",
        fontSize: 20
    },

    input: {
        borderColor: COLORS.secondary500,
        borderWidth: 2,
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 15,
        //marginVertical: 8,
        color: COLORS.secondary700,
        fontSize: 14,
        fontFamily: "butler-regular"
    },
    errorMsg: {
        color: COLORS.error,
        fontSize: 15,
        fontFamily: "butler-bold",
        textAlign: "right"
    },
    errorInput: {
        color: COLORS.error,
        borderColor: COLORS.error
    }
});
