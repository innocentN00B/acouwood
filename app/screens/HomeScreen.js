import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import Heading from "../components/Heading";
import colors from "../config/colors";
import NoTextLogoSvg from "../../svgs/NoTextLogoSvg";

function HomeScreen(props) {
  return (
    <Screen>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.startButton}>
          <NoTextLogoSvg />
        </TouchableOpacity>
        <Heading>Start test</Heading>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "50%",
  },
  startButton: {
    backgroundColor: colors.light,
    borderRadius: 100,
    width: 200,
    height: 200,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
