import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import * as Location from "expo-location";
import OnlyBackNav from "../Component/OnlyBackNav";

const PickOnMap = ({ navigation }) => {
  const [pin, setPin] = useState({
    latitude: 23.056440930917923,
    longitude: 87.6542989164591,
  });

  const [showModel, setshowModel] = useState(false);

  const getlocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setPin({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
    console.log(pin);
  };

  useEffect(() => {
    try {
      getlocation();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const VaidateToNext = () => {
    setshowModel(false);
    navigation.navigate("Chackout", {
      mapCode: pin,
    });
  };

  return (
    <>
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={showModel}
          onRequestClose={() => {
            setshowModel(false);
          }}
        >
          <View style={styles.model}>
            <View style={styles.modelBox}>
              <Text style={styles.modelBoxTitle}>Confirm Your Location?</Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={styles.cbtn}
                  onPress={() => {
                    setshowModel(false);
                  }}
                >
                  Cancel
                </Text>
                <Text
                  style={styles.ybtn}
                  onPress={() => {
                    VaidateToNext();
                  }}
                >
                  Yes
                </Text>
              </View>
            </View>
          </View>
        </Modal>
        <Text style={styles.title}>Pick Your Delivery Location</Text>
        <MapView
          style={styles.map}
          moveOnMarkerPress={true}
          showsMyLocationButton={true}
          loadingEnabled={true}
          loadingIndicatorColor="red"
          initialRegion={{
            latitude: pin.latitude,
            longitude: pin.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          zoomEnabled={true}
          scrollEnabled={true}
          showsUserLocation={true}
        >
          <Marker
            coordinate={{
              latitude: pin.latitude,
              longitude: pin.longitude,
            }}
            draggable={true}
            onDragStart={(e) => {
              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}
            onDragEnd={(e) => {
              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
              console.log(pin);
            }}
          >
            <Callout>
              <Text>Delivery Here</Text>
            </Callout>
          </Marker>
        </MapView>
        <Text style={styles.hint}>
          Press And Hold Pointer to Select Location
        </Text>

        <TouchableOpacity
          style={styles.Btn}
          onPress={() => {
            setshowModel(true);
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "#fff",
              textTransform: "uppercase",
            }}
          >
            Delivery here
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PickOnMap;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
    marginVertical: 40,
    fontSize: 20,
    fontWeight: "300",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 1.5,
    padding: 10,
    marginVertical: 10,
    overflow: "hidden",
  },
  hint: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "300",
  },
  Btn: {
    margin: 20,
    opacity: 0.9,
    backgroundColor: "#FA4A0C",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  model: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(37, 37, 37, 0.5)",
  },
  modelBox: {
    width: 300,
    height: 180,

    backgroundColor: "#fff",
    opacity: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  modelBoxTitle: {
    fontSize: 20,
    marginBottom: 30,
    fontWeight: "300",
  },
  cbtn: {
    backgroundColor: "rgba(234, 234, 234, 0.8)",
    padding: 10,
    paddingHorizontal: 15,
    color: "rgba(19, 19, 19, 0.8)",
    marginRight: 20,
    borderRadius: 10,
  },
  ybtn: {
    backgroundColor: "#FA4A0C",
    padding: 10,
    paddingHorizontal: 15,
    color: "#fff",
    borderRadius: 10,
  },
});
