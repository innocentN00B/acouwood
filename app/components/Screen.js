import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import colors from "../config/colors";

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
});

export default Screen;
