import React from "react";
import { View, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";

function HistoryScreen(navigation) {
  return (
    <Screen>
      <Card
        title="Report 1"
        subtitle="hej"
        image={require("../assets/background.png")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default HistoryScreen;
