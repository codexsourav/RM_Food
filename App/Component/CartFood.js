import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Feather, AntDesign } from "@expo/vector-icons";

import foodImg from "../../assets/Images/food1.png";

const CartFood = () => {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.item}>
        <Image source={foodImg} style={styles.food} />
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.foodNm}>Samosa</Text>
          <Text style={styles.foodRs}>RS 5.00</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.remove}>
        <AntDesign name="delete" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default CartFood;
const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  main: {
    width: windowWidth - 50,
    height: 100,
    backgroundColor: "#fff",
    marginHorizontal: 50 / 2,
    marginBottom: 30,
    borderRadius: 20,
    flex: 1,
    shadowColor: "#a6a6a6",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  item: {
    height: 100,
    width: windowWidth - 140,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  remove: {
    height: 50,
    width: 40,
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: "#f12d2d",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },
  food: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    marginLeft: 10,
  },
  foodNm: {
    fontWeight: "bold",
    fontSize: 18,
    opacity: 0.8,
  },
  foodRs: {
    marginTop: 4,
    color: "#FA4A0C",
    fontWeight: "500",
    fontSize: 12,
  },
});
