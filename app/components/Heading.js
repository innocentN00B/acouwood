import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

function Heading({ children }) {
  return <Text style={styles.text}> {children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontFamily: "Montserrat_700Bold",
    paddingVertical: 20,
    justifyContent: "center",
    color: colors.dark,
  },
});

export default Heading;
