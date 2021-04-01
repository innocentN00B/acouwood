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
    textAlign: "center",
    color: colors.dark,
    width: "85%",
  },
});

export default Heading;
