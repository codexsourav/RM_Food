import { StyleSheet, Modal, View, ActivityIndicator } from "react-native";
import React from "react";

const LoderView = (props) => {
  return (
    <Modal
      visible={!props.Load}
      onRequestClose={() => {
        props.Back();
      }}
    >
      <View style={styles.loader}>
        <ActivityIndicator size={50} style={styles.loadpro} color="#FA4A0C" />
      </View>
    </Modal>
  );
};

export default LoderView;

const styles = StyleSheet.create({
  loader: {
    backgroundColor: "#F6F6F9",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadpro: {
    color: "#FA4A0C",
    opacity: 0.7,
  },
});
