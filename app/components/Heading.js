import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

function Heading({ children, color }) {
  return <Text style={[styles.text, color && { color }]}> {children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    fontFamily: "Montserrat_700Bold",
    paddingVertical: 18,
    textAlign: "center",
    color: colors.dark,
  },
});

export default Heading;
