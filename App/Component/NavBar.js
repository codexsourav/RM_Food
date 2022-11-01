import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import navImg from "../../assets/Images/nav.png";

const NavBar = (props) => {
  return (
    <View style={styles.mainNav}>
      <TouchableOpacity
        onPress={() => {
          props.navig.navigation.openDrawer();
        }}
      >
        <Image source={navImg} style={styles.navImg} />
      </TouchableOpacity>
      <Image
        style={styles.navPic}
        source={{
          uri: "https://i.pinimg.com/564x/6f/de/85/6fde85b86c86526af5e99ce85f57432e.jpg",
        }}
      />
    </View>
  );
};

export default NavBar;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  mainNav: {
    flex: 1,
    flexDirection: "row",
    width: windowWidth,
    paddingHorizontal: 50,
    paddingVertical: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  navImg: {
    width: 25,
    height: 30,
    resizeMode: "contain",
    // backgroundColor: "red",
  },
  navPic: {
    width: 40,
    height: 40,
    borderColor: "#ADADAF",
    borderRadius: 10,
    borderWidth: 2,
    resizeMode: "contain",
  },
});
