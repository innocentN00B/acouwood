import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import colors from "../config/colors";

function CategoryButton({ title, onPress, color = "secondary" }) {
  return (
    <TouchableHighlight
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
      underlayColor={colors.light}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 280,
    height: 60,
    marginVertical: 15,
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
    fontSize: 24,
    fontFamily: "Montserrat_700Bold",
  },
});

export default CategoryButton;
