import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginPage from "../Pages/LoginPage";
import { Feather, AntDesign } from "@expo/vector-icons";

import SearchPage from "./SearchPage";
import ItemPage from "./ItemPage";
import Cart from "./Cart";
import Activity from "./Activity";

const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: "#F2F2F2",
        },
        tabBarIconStyle: {
          color: "red",
        },
        tabBarInactiveTintColor: "#ADADAF",
        tabBarActiveTintColor: "#FA4A0C",
      }}
    >
      <Tab.Screen
        name="HomeRouts"
        component={ItemPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            // <Foundation name="home" color={color} size={size} />
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Seatch"
        component={SearchPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="activity" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
