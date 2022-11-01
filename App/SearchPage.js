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

const SearchPage = ({ navigation }) => {
  return (
    <ScrollView style={styles.main}>
      <NavBar navig={{ navigation }} />
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search.."
          cursorColor="#ADADAF"
          style={styles.input}
        />
        <AntDesign
          name="search1"
          size={24}
          onPress={() => console.log("search")}
        />
      </View>
    </ScrollView>
  );
};

export default SearchPage;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingTop: 30,
  },
  input: {
    width: windowWidth - 140,
  },
  searchBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#e6e6e6",
    width: windowWidth - 50,
    alignItems: "center",
    padding: 15,
    fontWeight: "bold",
    borderRadius: 10,
    marginHorizontal: 50 / 2,
  },
});
