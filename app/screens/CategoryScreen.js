import React from "react";
import { StyleSheet, View } from "react-native";

import CategoryButton from "../components/CategoryButton";
import Heading from "../components/Heading";
import Screen from "../components/Screen";

function CategoryScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Heading>Hvilket type træ skal du måle på?</Heading>
        <CategoryButton
          title="Almindeligt træ"
          onPress={() => console.log()}
        ></CategoryButton>
        <CategoryButton
          title="CLT træ"
          onPress={() => console.log()}
        ></CategoryButton>
        <CategoryButton
          title="Lamineret træ"
          onPress={() => console.log()}
        ></CategoryButton>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 100,
  },
});

export default CategoryScreen;
