import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

import colors from "../config/colors";
import Heading from "../components/Heading";
import CategoryButton from "../components/CategoryButton";
import ClickHereButton from "../components/ClickHereButton";

function LoginScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/woodsense_logo.jpg")} />
      </View>
      <Heading>Login</Heading>
      <CategoryButton
        title="Login"
        onPress={() => console.log("tabbed")}
      ></CategoryButton>
      <CategoryButton
        title="Opret bruger"
        onPress={() => console.log("tabbed")}
        color="accent"
      ></CategoryButton>
      <ClickHereButton title="Please touch"> </ClickHereButton>
      <ClickHereButton title="Don't touch" color="primary"></ClickHereButton>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 50,
  },
  logoContainer: {
    position: "absolute",
    top: 200,
    alignSelf: "center",
  },
});

export default LoginScreen;
