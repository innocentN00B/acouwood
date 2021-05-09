import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../config/colors";
import Heading from "./Heading";

function TextCircle({ title }) {
  return (
    <View style={styles.outerCircle}>
      <View style={styles.circle}>
        <Heading color={colors.secondary}>{title}</Heading>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 250 / 2,
    backgroundColor: colors.accent,
    height: 250,
    width: 250,
    justifyContent: "center",
    alignSelf: "center",
  },
  outerCircle: {
    borderRadius: 275 / 2,
    backgroundColor: colors.primary,
    borderColor: colors.accent,
    borderWidth: 2,
    height: 275,
    width: 275,
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default TextCircle;
