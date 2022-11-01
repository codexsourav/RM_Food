<Image />;
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Food = (props) => {
  console.log(props);

  return (
    <TouchableOpacity
      style={styles.main}
      onPress={() => {
        props.navig.navigation.navigate("ProductView", { pid: props.id });
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Image
          source={{
            uri: props.img,
          }}
          style={styles.foodimg}
        />
      </View>
      <Text style={styles.foodTxt}> {props.title}</Text>
      <Text style={styles.FoodRs}>RS {props.rs}</Text>
    </TouchableOpacity>
  );
};

export default Food;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    width: 220,
    height: 270,
    borderRadius: 40,
    shadowColor: " rgba(57, 57, 57, 0.1)",

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    flex: 1,
    elevation: 9,
    marginHorizontal: 30,
    marginVertical: 40,

    marginTop: 140,
  },
  foodimg: {
    marginTop: -50,
    width: 160,
    height: 140,
    marginBottom: -10,
    resizeMode: "contain",
  },
  foodTxt: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 30,
    paddingHorizontal: 40,
    color: "#000",
  },
  FoodRs: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#FA4A0C",
  },
});
