import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import NavBar from "./Component/NavBar";
import Food from "./Component/Food";

const ItemPage = ({ navigation }) => {
  return (
    <ScrollView style={styles.main}>
      <NavBar navig={{ navigation }} />
      <Text style={styles.maintext}>Delicious food for you</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Food
          navig={{ navigation }}
          id="2"
          title="Samosa"
          rs="5.00"
          img="https://indibites.in/wp-content/uploads/2021/03/Untitled-1.png"
        />
        <Food
          navig={{ navigation }}
          id="2"
          title="Samosa"
          rs="5.00"
          img="https://indibites.in/wp-content/uploads/2021/03/Untitled-1.png"
        />
        <Food
          navig={{ navigation }}
          id="2"
          title="Samosa"
          rs="5.00"
          img="https://indibites.in/wp-content/uploads/2021/03/Untitled-1.png"
        />
        <Food
          navig={{ navigation }}
          id="2"
          title="Samosa"
          rs="5.00"
          img="https://indibites.in/wp-content/uploads/2021/03/Untitled-1.png"
        />
      </ScrollView>
    </ScrollView>
  );
};

export default ItemPage;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingTop: 30,
  },

  maintext: {
    fontSize: 50,
    fontWeight: "bold",
    paddingHorizontal: 40,
    opacity: 0.8,
  },
});
