import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

function Heading({ children }) {
  return <Text style={styles.text}> {children}</Text>;
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
