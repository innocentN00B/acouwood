import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

function AppText({ children, color }) {
  return <Text style={[styles.text, color && { color }]}> {children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "Montserrat_400Regular",
    textAlign: "center",
    color: colors.dark,
  },
});

export default AppText;
