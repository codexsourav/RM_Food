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

const ChackFood = () => {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.item}>
        <Image source={foodImg} style={styles.food} />
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.foodNm}>Samosa</Text>
          <Text style={styles.foodRs}>RS 5.00</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ChackFood;
const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  main: {
    width: windowWidth - 50,
    height: 130,
    backgroundColor: "#fff",
    marginHorizontal: 50 / 2,
    marginBottom: 30,
    borderRadius: 20,
    flex: 1,
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

  food: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginLeft: 20,
    marginRight: 30,
  },
  foodNm: {
    fontWeight: "bold",
    fontSize: 25,
    opacity: 0.8,
  },
  foodRs: {
    marginTop: 10,
    color: "#FA4A0C",
    fontWeight: "bold",
    fontSize: 18,
  },
});
