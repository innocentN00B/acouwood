import React from "react";
import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import Heading from "../components/Heading";

const tests = [
  {
    id: 1,
    title: "Almindeligt træ",
    date: "8/4-2021 kl. 12:33",
    image: require("../assets/background.png"),
  },
  {
    id: 2,
    title: "CLT træ",
    date: "9/4-2021 kl. 12:33",
    image: require("../assets/background.png"),
  },
];

function HistoryScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <Screen>
      <Heading>Historik</Heading>
      <FlatList
        data={tests}
        keyExtractor={(test) => test.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.date}
            image={item.image}
            onPress={() => navigation.navigate("TestDetail")}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          console.log("Lav en fed refresh, når backend er connected");
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default HistoryScreen;
