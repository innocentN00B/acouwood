import React from "react";
import { StyleSheet, Text } from "react-native";

import defaultStyles from "../../config/styles";

function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;

  return <Text style={styles.error}>{error}</Text>;
}
const styles = StyleSheet.create({
  error: {
    color: defaultStyles.colors.accent,
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
  },
});

export default ErrorMessage;
