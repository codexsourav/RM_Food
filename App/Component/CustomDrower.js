import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Feather, AntDesign } from "@expo/vector-icons";

import logo from "../../assets/Images/applogo.png";

const CustomDrower = (props) => {
  return (
    <View style={styles.main}>
      <Image source={logo} style={styles.applogo} />
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity>
        <View style={styles.logout}>
          <AntDesign name="logout" size={23} />
          <Text style={{ marginLeft: 20, fontWeight: "400" }}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrower;

const styles = StyleSheet.create({
  main: { flex: 1, backgroundColor: "#F2F2F2" },
  applogo: {
    padding: 80,
    marginHorizontal: 50,
    marginTop: 50,
    resizeMode: "cover",
  },
  logout: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 30,
  },
});
