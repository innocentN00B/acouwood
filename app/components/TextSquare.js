import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";

function TextSquare({ title }) {
  return (
    <View style={styles.outerSquare}>
      <View style={styles.square}>
        <AppText color={colors.primary}>{title}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  square: {
    backgroundColor: colors.accent,
    height: 80,
    width: "92%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  outerSquare: {
    backgroundColor: colors.primary,
    borderColor: colors.accent,
    borderWidth: 2,
    height: 100,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default TextSquare;
