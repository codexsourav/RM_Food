import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

const Address = ({ route, navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mobile, setMobile] = useState(route.params.mobile);
  const [name, setname] = useState("");
  const [vlg, setVlg] = useState("");

  const [validErr, setValidErr] = useState(["", "", ""]);

  const getlocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords.latitude + "," + location.coords.longitude);
  };

  useEffect(() => {
    try {
      getlocation();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const validate = () => {
    if (name.length < 3) {
      setValidErr(["Name Langth Too Short!", "", ""]);
    } else if (vlg.length < 5) {
      setValidErr(["", "Invalid Information!", ""]);
    } else if (mobile.length != 10) {
      setValidErr(["", "", "Invalid Mobile Number!"]);
    } else {
      navigation.replace("HomeRouts");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        {/* Your NAme  */}
        <Text style={styles.inputTxt}>Your Full Name</Text>
        {validErr[0] != "" ? (
          <Text style={styles.err}>{validErr[0]}</Text>
        ) : null}
        <TextInput
          value={name}
          onChangeText={(val) => {
            setValidErr(["", "", ""]);
            setname(val);
          }}
          style={styles.input}
          cursorColor="#ADADAF"
          keyboardType="default"
        />
        {/* Your vilage  */}
        <Text style={styles.inputTxt}>Village,Area, Street, Sector</Text>
        {validErr[1] != "" ? (
          <Text style={styles.err}>{validErr[1]}</Text>
        ) : null}
        <TextInput
          value={vlg}
          onChangeText={(val) => {
            setValidErr(["", "", ""]);
            setVlg(val);
          }}
          style={styles.input}
          cursorColor="#ADADAF"
          keyboardType="default"
        />
        {/* Your Mobile  */}
        <Text style={styles.inputTxt}>Mobile Number</Text>
        {validErr[2] != "" ? (
          <Text style={styles.err}>{validErr[2]}</Text>
        ) : null}
        <TextInput
          value={mobile}
          onChangeText={(val) => {
            setValidErr(["", "", ""]);
            setMobile(val);
          }}
          style={styles.input}
          cursorColor="#ADADAF"
          keyboardType="numeric"
        />

        {/* Your pincode  */}
        <Text style={styles.inputTxt}>Pincode</Text>
        <TextInput
          editable={false}
          value="722141"
          style={styles.input}
          cursorColor="#ADADAF"
          keyboardType="numeric"
        />

        {/* Your Mobile  */}
        <Text style={styles.inputTxt}>State</Text>
        <TextInput
          value="West Bengal"
          editable={false}
          style={styles.input}
          cursorColor="#ADADAF"
          keyboardType="default"
        />
        {/* Your Mobile  */}
        <Text style={styles.inputTxt}>GMap Location</Text>
        <TextInput
          value={location == null ? "" : location}
          editable={false}
          style={styles.input}
          cursorColor="#ADADAF"
          keyboardType="default"
        />
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => {
            getlocation(), console.log(location);
            validate();
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600", color: "#fff" }}>
            SET ADDRESS
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Address;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 50 / 2,
  },
  inputTxt: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#353535",
    opacity: 0.8,
    marginLeft: 5,
  },
  input: {
    backgroundColor: "#e6e6e6",
    width: windowWidth - 50,
    alignItems: "center",
    padding: 15,
    fontWeight: "bold",
    borderRadius: 10,
    marginBottom: 30,
  },
  Btn: {
    backgroundColor: "#FA4A0C",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
    borderRadius: 10,
  },
  err: {
    textAlign: "right",
    color: "red",
    fontWeight: "bold",
    marginRight: 10,
    marginTop: -8,
    marginBottom: 8,
    opacity: 0.8,
    fontSize: 12,
  },
});
