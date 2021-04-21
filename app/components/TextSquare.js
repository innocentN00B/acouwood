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
    borderRadius: 40,
    backgroundColor: colors.normal,
    height: "10%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin: 10,
  },
});

export default TextCircle;
