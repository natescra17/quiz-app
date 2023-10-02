import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";

import { Provider } from "react-redux";
import { store } from "./store/redux/store";

import { COLORS } from "./constants/colors";
import { SCREEN_NAMES } from "./constants/screens";
import { useFonts } from "expo-font";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";

const Stack = createNativeStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        hand: require("./assets/fonts/handwriting.ttf"),
        "butler-bold": require("./assets/fonts/Butler_Bold.otf"),
        "butler-regular": require("./assets/fonts/Butler_Regular.otf")
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <>
            <Provider store={store}>
                <StatusBar style='light' />
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: COLORS.primary500
                            },
                            headerTintColor: COLORS.primary400,
                            contentStyle: {
                                backgroundColor: COLORS.accent
                            }
                        }}
                    >
                        <Stack.Screen
                            name={SCREEN_NAMES.login}
                            component={Login}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name={SCREEN_NAMES.home}
                            component={Home}
                        />
                        <Stack.Screen
                            name={SCREEN_NAMES.quiz}
                            component={Game}
                        />
                        <Stack.Screen
                            name={SCREEN_NAMES.game_over}
                            component={GameOver}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </>
    );
}
