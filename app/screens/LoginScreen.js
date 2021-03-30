import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import SvgUri from "expo-svg-uri";

import colors from "../config/colors";
import Heading from "../components/Heading";
import CategoryButton from "../components/CategoryButton";
import ClickHereButton from "../components/ClickHereButton";
import LogoSvg from "../../svgs/LogoSvg";

function LoginScreen() {
  return (
    <View style={styles.background}>
      <LogoSvg></LogoSvg>
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
});

export default LoginScreen;
