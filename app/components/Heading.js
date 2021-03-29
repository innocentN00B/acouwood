import React from "react";
import { Text, StyleSheet } from "react-native";

function Heading({ children }) {
  return <Text style={styles.text}> {children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontFamily: "Montserrat_700Bold",
    paddingVertical: 20,
    justifyContent: "center",
  },
});

export default Heading;
