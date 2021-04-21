import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../config/colors";
import Heading from "./Heading";

function TextCircle(props) {
  return (
    <View style={styles.circle}>
      <Heading>OK</Heading>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 250 / 2,
    backgroundColor: colors.normal,
    height: 250,
    width: 250,
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default TextCircle;
