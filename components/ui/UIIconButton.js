import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function UIIconButton({ icon, color, onPressHandler }) {
    return (
        <Pressable
            onPress={onPressHandler}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <Ionicons name={icon} size={26} color={color} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
});
