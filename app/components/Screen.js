import React from "react";
import { SafeAreaView, StyleSheet} from "react-native";
import Constants from 'expo-constants';

import colors from "../config/colors";

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.primary,
    flex: 1,
  }
});

export default Screen;
