import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function RoundButton({ title, onPress, backgroundColor, borderColor, color }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        backgroundColor && { backgroundColor },
        borderColor && { borderColor },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, color && { color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 15,
    borderColor: colors.primary,
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 60,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    color: colors.dark,
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
  },
});

export default RoundButton;
