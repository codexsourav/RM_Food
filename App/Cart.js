import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import React from "react";
import NavBar from "./Component/NavBar";
import { Feather, AntDesign } from "@expo/vector-icons";
import CartFood from "./Component/CartFood";

const Cart = ({ navigation }) => {
  return (
    <ScrollView style={styles.main}>
      <NavBar navig={{ navigation }} />
      <Text style={styles.title}>My Cart</Text>
      <CartFood />
      <CartFood />
    </ScrollView>
  );
};

export default Cart;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingTop: 30,
  },
  title: {
    fontSize: 35,
    fontWeight: "500",
    paddingHorizontal: 50,
    opacity: 0.7,
    marginBottom: 50,
  },
});
