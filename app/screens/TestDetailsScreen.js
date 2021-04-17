import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import Screen from "../components/Screen";

function TestDetailsScreen(props) {
  return (
    <Screen>
      <Image source={require("../assets/background.png")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Report</AppText>
        <AppText style={styles.date}>7. april 2021</AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  date: {
    color: colors.accent,
    fontSize: 20,
    marginVertical: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
  },
});
export default TestDetailsScreen;
