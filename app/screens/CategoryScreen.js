import React from "react";
import { StyleSheet, View } from "react-native";

import CategoryButton from "../components/CategoryButton";
import Heading from "../components/Heading";
import Screen from "../components/Screen";

function CategoryScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.header}>
        <Heading>What type of wood are you testing?</Heading>
      </View>
      <View style={styles.buttonsContainer}>
        <CategoryButton
          title="Normal wood"
          onPress={() => navigation.navigate("Test")}
        ></CategoryButton>
        <CategoryButton
          title="CLT"
          onPress={() => navigation.navigate("Test")}
        ></CategoryButton>
        <CategoryButton
          title="Glulam"
          onPress={() => navigation.navigate("Test")}
        ></CategoryButton>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 150,
    paddingHorizontal: 40,
  },
  buttonsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryScreen;
