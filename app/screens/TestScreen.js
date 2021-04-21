import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import Heading from "../components/Heading";
import RoundButton from "../components/RoundButton";
import Screen from "../components/Screen";
import TextCircle from "../components/TextCircle";

function TestScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <AppText>Test udført succesfuldt</AppText>
        <Heading>Resultat</Heading>
        <TextCircle />
        <RoundButton
          title={"Gem test"}
          onPress={() => navigation.navigate("Result")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 80,
    margin: 50,
  },
});

export default TestScreen;