import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const MAIN_STYLES = StyleSheet.create({
    root: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15,
        width: "100%",
        height: "100%"
    },
    full: { width: "100%" },
    h1: {
        fontFamily: "hand",
        color: COLORS.primary500,
        fontSize: 32
    },
    h2: {
        fontFamily: "butler-regular",
        color: COLORS.primary500,
        fontSize: 22
    },
    h2_Bold: {
        fontFamily: "butler-bold",
        color: COLORS.primary500,
        fontSize: 22
    },
    error: {
        fontFamily: "butler-regular",
        color: COLORS.error
    },
    correct: {
        fontFamily: "butler-regular",
        color: COLORS.correct
    }
});
