import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import "react-native-gesture-handler";
import LoginPage from "./Pages/LoginPage";
import Address from "./Pages/Address";

import HomeRouts from "./App/HomeRouts";

import OrderRouts from "./App/Order/OrderRouts";

import ChackOut from "./App/Order/ChackOut";
import PickOnMap from "./App/Order/PickOnMap";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ere"
          component={HomeRouts}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Address"
          component={Address}
          options={{
            headerShown: true,
            headerTitle: "SETUP YOUR ADDRESS",
            headerBackVisible: false,
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTitleStyle: { color: "#000", fontSize: 20 },
          }}
        />
        <Stack.Screen
          name="HomeRouts"
          component={HomeRouts}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductView"
          component={OrderRouts}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
