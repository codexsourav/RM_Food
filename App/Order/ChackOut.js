import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import OnlyBackNav from "../Component/OnlyBackNav";
import ChackFood from "../Component/ChackFood";
import MapView, { Marker } from "react-native-maps";

const ChackOut = ({ navigation, route }) => {
  const map = route.params.mapCode;
  return (
    <>
      <OnlyBackNav
        navi={() => {
          navigation.goBack();
        }}
      />
      <ScrollView>
        <Text style={styles.title}>Checkout</Text>
        <ChackFood />

        <MapView
          scrollEnabled={false}
          maxZoomLevel={2000}
          minZoomLevel={2000}
          loadingIndicatorColor="red"
          style={styles.map}
          initialRegion={{
            latitude: map.latitude,
            longitude: map.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          loadingEnabled={true}
        >
          <Marker
            coordinate={{
              latitude: map.latitude,
              longitude: map.longitude,
            }}
          />
        </MapView>

        <View style={styles.billBox}>
          <View style={styles.tbl}>
            <Text style={styles.tbldata}>Item Total</Text>
            <Text style={styles.tbldata}>3 P</Text>
          </View>
          <View style={styles.tbl}>
            <Text style={styles.tbldata}>Price 1 Pic</Text>
            <Text style={styles.tbldata}>5 RS</Text>
          </View>
          <View style={styles.tbl}>
            <Text style={styles.tbldata}>Delivery Fee</Text>
            <Text style={styles.tbldata}>Free</Text>
          </View>
          <View style={styles.bill}>
            <Text style={styles.tbldata}>Total Bill</Text>
            <Text style={[styles.tbldata, { fontWeight: "600", fontSize: 20 }]}>
              15 RS
            </Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.Btn} onPress={null}>
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#fff" }}>
          SUBMIT ORDER
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default ChackOut;

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 30,
    marginVertical: 20,
    fontSize: 23,
    fontWeight: "bold",
    opacity: 0.68,
  },
  map: {
    width: Dimensions.get("window").width - 50,
    height: 140,
    padding: 10,
    marginHorizontal: 50 / 2,
    marginVertical: 10,
    overflow: "hidden",
  },
  billBox: {
    width: Dimensions.get("window").width - 20,
    height: 185,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
    marginHorizontal: 20 / 2,
    marginVertical: 10,
    borderRadius: 20,
    flex: 1,
    paddingTop: 10,
  },
  tbl: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  tbldata: {
    fontSize: 15,
    fontWeight: "400",
    opacity: 0.8,
    color: "#212121",
  },
  bill: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderTopColor: "#BABABA",
    borderTopWidth: 1,
  },

  Btn: {
    width: Dimensions.get("window").width - 30,
    margin: 30 / 2,
    backgroundColor: "#FA4A0C",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 50,
  },
});
