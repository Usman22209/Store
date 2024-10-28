import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store"; // Ensure the path is correct
import Landing from "./screens/Landing";
import Detail from "./screens/Detail";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "./screens/Cart";
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
            fontWeight: "bold", // Bold text
            fontSize: 22, // Title font size
            color: "white",
          marginTop: '-35%',
          },
          headerTitleAlign: "center",
          headerTintColor: "white",
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
