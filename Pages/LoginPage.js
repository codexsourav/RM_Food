import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  BackHandler,
  Keyboard,
} from "react-native";

import React, { useRef, useState } from "react";

// Images Import
import logo from "../assets/Images/rmfood.png";

const LoginPage = ({ navigation }) => {
  const [mobile, setMobile] = useState();
  const [errmsg, setErr] = useState(null);
  const [nextStep, setNextStep] = useState(false);
  const [otperr, setotperr] = useState(null);
  // otp in Ref
  const pinv1 = useRef(null);
  const pinv2 = useRef(null);
  const pinv3 = useRef(null);
  const pinv4 = useRef(null);

  // Otp PIn
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");

  BackHandler.addEventListener("hardwareBackPress", () => {
    if (nextStep == true) {
      setNextStep(false);
      return true;
    } else {
      BackHandler.exitApp();
    }
  });

  const Varify = () => {
    if (isNaN(mobile) == false) {
      if (mobile.length == 10) {
        setNextStep(true);
      } else {
        setErr("Invalid Mobile Number!!");
      }
    } else {
      setErr("Invalid Mobile Number!!");
    }
  };

  const VarifyOtp = () => {
    const allpin = pin1 + pin2 + pin3 + pin4;
    if (allpin.length != 4) {
      setotperr("Invalid OTP");
    } else {
      setotperr(null);
    }
  };

  const ResendBtn = () => {
    navigation.replace("Address", {
      mobile,
    });
  };

  return (
    <View style={{ paddingTop: 30, backgroundColor: "#fff", flex: 1 }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.image}>
          <Image
            source={logo}
            resizeMode="cover"
            style={{
              width: windowWidth,
              resizeMode: "contain",
            }}
          />
        </View>

        {nextStep == false ? (
          <View style={styles.inputbox}>
            <Text style={styles.inputTxt}>Mobile Number</Text>

            <TextInput
              value={mobile}
              style={styles.input}
              cursorColor="#ADADAF"
              keyboardType="numeric"
              onChangeText={(val) => {
                setErr(null);
                setMobile(val);
              }}
            />

            {errmsg == null ? null : <Text style={styles.err}>{errmsg}</Text>}
            <TouchableOpacity style={styles.Btn} onPress={Varify}>
              <Text style={{ fontSize: 18, fontWeight: "600", color: "#fff" }}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.inputbox}>
            <Text style={styles.inputTxt}>Enter Your OTP</Text>

            <View style={styles.otpbox}>
              <TextInput
                style={styles.otpinput}
                cursorColor="#ADADAF"
                maxLength={1}
                keyboardType="numeric"
                ref={pinv1}
                onChangeText={(val) => {
                  setPin1(val);
                }}
                onKeyPress={() => {
                  if (pin1.length == 1) {
                    pinv2.current.focus();
                  }
                }}
              />
              <TextInput
                style={styles.otpinput}
                cursorColor="#ADADAF"
                keyboardType="numeric"
                maxLength={1}
                ref={pinv2}
                onChangeText={(val) => {
                  setPin2(val);
                }}
                onKeyPress={() => {
                  if (pin2.length == 1) {
                    pinv3.current.focus();
                  }
                }}
              />
              <TextInput
                style={styles.otpinput}
                cursorColor="#ADADAF"
                maxLength={1}
                ref={pinv3}
                keyboardType="numeric"
                onChangeText={(val) => {
                  setPin3(val);
                }}
                onKeyPress={() => {
                  if (pin3.length == 1) {
                    pinv4.current.focus();
                  }
                }}
              />
              <TextInput
                style={styles.otpinput}
                cursorColor="#ADADAF"
                ref={pinv4}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={(val) => {
                  setPin4(val);
                }}
                onKeyPress={() => {
                  if (pin4.length == 0) {
                    pinv3.current.focus();
                  } else {
                    Keyboard.dismiss();
                  }
                }}
              />
            </View>
            {otperr == null ? null : <Text style={styles.err}>{otperr}</Text>}
            <TouchableOpacity style={styles.Btn} onPress={VarifyOtp}>
              <Text style={{ fontSize: 18, fontWeight: "600", color: "#fff" }}>
                SUBMIT OTP
              </Text>
            </TouchableOpacity>

            <Text style={styles.Resend} onPress={ResendBtn}>
              Resend OTP
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default LoginPage;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  image: {
    marginTop: 80,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
  },
  input: {
    backgroundColor: "#e6e6e6",
    width: windowWidth - 50,
    alignItems: "center",
    padding: 15,
    fontWeight: "bold",
    borderRadius: 10,
  },
  inputbox: {
    margin: 50 / 2,
  },
  inputTxt: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#353535",
    opacity: 0.8,
    marginLeft: 5,
  },
  Btn: {
    backgroundColor: "#FA4A0C",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 10,
  },
  err: {
    color: "red",
    fontSize: 12,
    marginTop: 10,
    textAlign: "right",
    fontWeight: "bold",
    opacity: 0.7,
  },
  Resend: {
    fontSize: 15,
    fontWeight: "500",
    color: "#000",
    textAlign: "center",
    marginTop: 80,
    opacity: 0.6,
  },
  otpinput: {
    backgroundColor: "#e6e6e6",
    width: 60,
    alignItems: "center",
    padding: 15,
    fontWeight: "bold",
    borderRadius: 10,
    textAlign: "center",
  },
  otpbox: {
    marginBottom: 20,
    flex: 1,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
