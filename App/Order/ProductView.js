import {
  StyleSheet,
  Text,
  Image,
  View,
  BackHandler,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
} from "react-native";
import React, { useState } from "react";
import ItemNav from "../Component/ItemNav";
import { Ionicons } from "@expo/vector-icons";
import LoderView from "../Component/LoderView";
const ProductView = ({ route, navigation }) => {
  const [qun, setqun] = useState(2);
  if (qun < 2) {
    setqun(2);
  }

  const [ImgLoad, setImgLoad] = useState(false);

  BackHandler.addEventListener("hardwareBackPress", () => {
    if (navigation.canGoBack() == true) {
      navigation.goBack();
      return true;
    } else {
      BackHandler.exitApp();
    }
  });

  return (
    <>
      <LoderView
        Load={ImgLoad}
        Back={() => {
          if (navigation.canGoBack() == true) {
            navigation.goBack();
            return true;
          } else {
            BackHandler.exitApp();
          }
        }}
      />

      <View style={{ backgroundColor: "#F6F6F9", flex: 1 }}>
        <ItemNav
          navi={() => {
            navigation.goBack();
          }}
        />
        <ScrollView>
          <Image
            onLoadEnd={() => {
              setImgLoad(true);
            }}
            style={styles.mainimage}
            resizeMode="contain"
            source={{
              uri: "https://www.seekpng.com/png/full/257-2577623_samosa-indian-delicious-food.png",
            }}
            PlaceholderContent={<ActivityIndicator />}
          />

          <Text style={styles.title}>Singara (সিঙ্গারা)</Text>
          <Text style={styles.price}>RS: 5.00</Text>

          {/* info */}
          <View style={{ margin: 30 }}>
            <Text style={styles.info}>Delivery info</Text>
            <Text style={[styles.des, { marginBottom: 35 }]}>
              Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
            </Text>

            <Text style={styles.info}>Return policy</Text>
            <Text style={styles.des}>
              All our foods are double checked before leaving our stores so by
              any case you found a broken food please contact our hotline
              immediately.
            </Text>
          </View>
        </ScrollView>
        <View style={styles.tab}>
          <View style={styles.priceBox}>
            <Text style={styles.info}>Quantity: {qun}</Text>
            <Text style={styles.tprice}>RS: {qun * 5}</Text>
          </View>

          <View style={styles.buyBox}>
            <View style={styles.counter}>
              <Ionicons
                name="add"
                size={24}
                color="#000"
                style={styles.icon}
                onPress={() => {
                  setqun(qun + 1);
                }}
              />
              <Text>{qun}</Text>
              <Ionicons
                name="remove"
                size={24}
                color="#000"
                style={styles.icon}
                onPress={() => {
                  setqun(qun - 1);
                }}
              />
            </View>
            <TouchableOpacity
              style={styles.orderBtn}
              onPress={() => {
                navigation.navigate("PickMap");
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Order Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProductView;
const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  mainimage: {
    width: windowWidth - 80,
    height: 200,
    marginHorizontal: 80 / 2,
    resizeMode: "contain",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 20,
    fontWeight: "bold",
    opacity: 0.8,
    textTransform: "capitalize",
  },
  price: {
    textAlign: "center",
    fontSize: 25,
    color: "#FA4A0C",
    marginTop: 20,
    fontWeight: "bold",

    textTransform: "capitalize",
  },
  info: {
    fontSize: 20,
    fontWeight: "bold",
  },
  des: {
    fontSize: 16,
    fontWeight: "300",
    marginTop: 15,
  },
  tab: {
    width: windowWidth,
    height: 150,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  priceBox: {
    padding: 10,
    marginLeft: 20,
    justifyContent: "center",
  },
  tprice: {
    fontSize: 18,
    color: "#FA4A0C",
    marginTop: 4,
    fontWeight: "bold",
    textTransform: "capitalize",
  },

  buyBox: {
    justifyContent: "space-evenly",
  },
  counter: {
    flexDirection: "row",
    width: 130,
    marginRight: 20,
    borderRadius: 50,
    alignItems: "center",
    color: "#fff",
    justifyContent: "space-evenly",
  },
  orderBtn: {
    backgroundColor: "#FA4A0C",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginRight: 20,
    borderRadius: 50,
    marginTop: 15,
  },
  icon: {
    padding: 10,
  },
});
