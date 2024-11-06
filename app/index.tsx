import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store"; // Ensure the path is correct
import Landing from "./screens/Landing";
import Detail from "./screens/Detail";
import Cart from "./screens/Cart";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>

        <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#6C48C5",
            },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 22,
              marginTop: '-35%',
            },
            headerTitleAlign: "center",
            headerTintColor: "white",
            cardStyleInterpolator: ({ current, next, inverted, layouts }) => {
              const translateX = current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0], // Slide from right to left
              });

              const scale = current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1], // Scale effect
              });

              const opacity = current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1], // Fade-in effect
              });

              return {
                cardStyle: {
                  transform: [
                    { translateX }, // Apply sliding effect
                    { scale }, // Apply scaling effect
                  ],
                  opacity, // Apply fade-in effect
                },
              };
            },
          }}
        >
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{
              title: "Home Page", // Custom title for Landing screen
            }}
          />
          <Stack.Screen
            name="detail"
            component={Detail}
            options={{
              title: "Detail Page", // Custom title for Detail screen
            }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{
              title: "Cart", 
            }}
          />
        </Stack.Navigator>
      
    </Provider>
  );
};

export default App;
