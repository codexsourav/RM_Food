import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductView from "./ProductView";
import PickOnMap from "./PickOnMap";
import ChackOut from "./ChackOut";
const Stack = createNativeStackNavigator();
const OrderRouts = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Product"
        component={ProductView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PickMap"
        component={PickOnMap}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Chackout"
        component={ChackOut}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default OrderRouts;
