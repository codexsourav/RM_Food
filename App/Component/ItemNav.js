import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

const ItemNav = (props) => {
  return (
    <View style={styles.mainNav}>
      <TouchableOpacity
        onPress={() => {
          props.navi();
        }}
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="ios-cart-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default ItemNav;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  mainNav: {
    marginTop: 60,
    flexDirection: "row",
    width: windowWidth,
    paddingHorizontal: 30,
    marginBottom: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
