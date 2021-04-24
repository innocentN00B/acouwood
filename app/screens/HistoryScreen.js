import React from "react";
import { useState, useEffect } from "react";
import { FlatList, StyleSheet, ActivityIndicator, Image } from "react-native";

import * as firebase from "firebase";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import Heading from "../components/Heading";

function HistoryScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const test = firebase
      .firestore()
      .collection("tests")
      .onSnapshot((querySnapshot) => {
        const tests = [];
        querySnapshot.forEach((documentSnapshot) => {
          //Lav et loop der formaterer timestamp til et date objekt
          tests.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setTests(tests);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => test();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <Screen>
      <Heading>Recent tests</Heading>
      <FlatList
        data={tests}
        renderItem={({ item }) => (
          <ListItem
            title={item.customer}
            subtitle={item.comment}
            image={{ uri: item.url }}
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
