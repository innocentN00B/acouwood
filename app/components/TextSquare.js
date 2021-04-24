import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";

function TextCircle(props) {
  return (
    <View style={styles.circle}>
      <AppText>OK</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 20,
    backgroundColor: colors.normal,
    height: "10%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default TextCircle;
