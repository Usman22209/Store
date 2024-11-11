import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Landing from "./screens/Landing";
import Detail from "./screens/Detail";
import Cart from "./screens/Cart";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import { Animated } from "react-native";
import { TransitionSpecs, CardStyleInterpolators } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = Font.useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Semibold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null; // or a loader of your choice
  }

  return (
    <Provider store={store}>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{
          headerShown: false, // Disable the default header
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS, // Bottom-up transition
          transitionSpec: {
            open: TransitionSpecs.RevealFromBottomAndroidSpec,
            close: TransitionSpecs.RevealFromBottomAndroidSpec,
          },
        }}
      >
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{
            title: "Home Page",
            headerStyle: {
              backgroundColor: "#6C48C5",
            },
            headerTitleStyle: {
              fontFamily: "CustomFont-Bold",
              fontSize: 22,
            },
            headerTitleAlign: "center",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="detail"
          component={Detail}
          options={{
            title: "Detail Page",
            headerStyle: {
              backgroundColor: "#6C48C5",
            },
            headerTitleStyle: {
              fontFamily: "CustomFont-Bold",
              fontSize: 22,
            },
            headerTitleAlign: "center",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </Provider>
  );
};

export default App;
