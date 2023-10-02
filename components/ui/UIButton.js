import { Pressable, Text, View, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export default function UIButton({ handleOnPress, children }) {
    return (
        <View style={styles.outerContainer}>
            <Pressable
                onPress={handleOnPress}
                style={({ pressed }) =>
                    pressed
                        ? [styles.innerContainer, styles.innerContainerPressed]
                        : styles.innerContainer
                }
                android_ripple={{ color: COLORS.primary500 }}
            >
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        overflow: "hidden",
        borderRadius: 15,
        margin: 8,
        borderWidth: 2,
        borderColor: COLORS.primary500,
        width: 150
    },
    innerContainer: {
        backgroundColor: COLORS.primary400,
        paddingVertical: 8,
        paddingHorizontal: 15
    },
    innerContainerPressed: {
        backgroundColor: COLORS.primary500,
        opacity: 0.75
    },
    text: {
        textAlign: "center",
        color: COLORS.accent,
        fontFamily: "hand",
        fontSize: 24
    }
});
