import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import { COLORS } from "../../constants/colors";
export default function UIOptionItem({
    value,
    handleOnPress,
    isSelected,
    disabled,
    extraStyles
}) {
    return (
        <View style={styles.gridItem}>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPress : null
                ]}
                android_ripple={{ color: COLORS.secondary700 }}
                onPress={handleOnPress}
                disabled={disabled}
            >
                <View
                    style={
                        isSelected
                            ? [
                                  styles.innerContainer,
                                  styles.innerContainerSelectedOption
                              ]
                            : [styles.innerContainer, extraStyles]
                    }
                >
                    <Text style={styles.text}>{value}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        borderColor: COLORS.secondary700,
        borderWidth: 2,
        //shadows
        elevation: 10,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    button: {
        flex: 1
    },
    buttonPress: {
        opacity: 0.75
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.secondary500
    },
    text: {
        fontFamily: "butler-regular",
        color: COLORS.accent,
        fontSize: 18
    },
    innerContainerSelectedOption: {
        backgroundColor: COLORS.secondary700
    }
});
