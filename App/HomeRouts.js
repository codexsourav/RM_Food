import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import ItemPage from "./ItemPage";
import CustomDrower from "./Component/CustomDrower";
import { Feather, AntDesign } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import Cart from "./Cart";
const Drawer = createDrawerNavigator();
const HomeRouts = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrower {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerItemStyle: {
          padding: 10,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Food Menu",
          drawerActiveTintColor: "#FA4A0C",
          drawerIcon: ({ size, color }) => (
            <Feather name="book-open" color={color} size={size} />
          ),
          drawerLabelStyle: {
            fontWeight: "bold",
          },
          drawerActiveBackgroundColor: "#F2F2F2",
        }}
      />

      <Drawer.Screen
        name="Oreder"
        component={ItemPage}
        options={{
          title: "Your Orders",
          drawerActiveTintColor: "#FA4A0C",
          drawerIcon: ({ size, color }) => (
            <Feather name="gift" color={color} size={size} />
          ),
          drawerLabelStyle: {
            fontWeight: "bold",
          },
          drawerActiveBackgroundColor: "#F2F2F2",
        }}
      />

      <Drawer.Screen
        name="SetAddrs"
        component={ItemPage}
        options={{
          title: "Chenge Adress",
          drawerActiveTintColor: "#FA4A0C",
          drawerIcon: ({ size, color }) => (
            <Feather name="map-pin" color={color} size={size} />
          ),
          drawerLabelStyle: {
            fontWeight: "bold",
          },
          drawerActiveBackgroundColor: "#F2F2F2",
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={ItemPage}
        options={{
          title: "Profile",
          drawerActiveTintColor: "#FA4A0C",
          drawerIcon: ({ size, color }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
          drawerLabelStyle: {
            fontWeight: "bold",
          },
          drawerActiveBackgroundColor: "#F2F2F2",
        }}
      />

      <Drawer.Screen
        name="Contact"
        component={ItemPage}
        options={{
          title: "Contact US",
          drawerActiveTintColor: "#FA4A0C",
          drawerIcon: ({ size, color }) => (
            <AntDesign name="customerservice" color={color} size={size} />
          ),
          drawerLabelStyle: {
            fontWeight: "bold",
          },
          drawerActiveBackgroundColor: "#F2F2F2",
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomeRouts;

const styles = StyleSheet.create({});
