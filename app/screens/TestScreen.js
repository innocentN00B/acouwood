import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import AppText from "../components/AppText";
import Heading from "../components/Heading";
import RoundButton from "../components/RoundButton";
import Screen from "../components/Screen";
import TextCircle from "../components/TextCircle";
import colors from "../config/colors";

function TestScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <AppText>Test was succesfully made...</AppText>
        <View style={styles.resultContainer}>
          <TextCircle title="Detected moist" color={colors.primary} />
        </View>
        <RoundButton
          title={"Save test"}
          borderColor={colors.secondary}
          onPress={() => navigation.navigate("Result")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
  },
  resultContainer: {
    paddingTop: 100,
    marginVertical: 40,
  },
});

export default TestScreen;
