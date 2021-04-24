import React from "react";
import { useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
  Dimensions,
} from "react-native";

import Screen from "../components/Screen";
import { firebase } from "../../src/firebase/config";
import Heading from "../components/Heading";
import colors from "../config/colors";
import NoTextLogoSvg from "../../svgs/NoTextLogoSvg";
import RoundButton from "../components/RoundButton";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";

function HomeScreen({ navigation }) {
  const windowHeight = Dimensions.get("window").height;
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
      <View style={styles.buttonContainer}>
        <Heading>Tap to start test</Heading>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate("Category")}
        >
          <NoTextLogoSvg />
        </TouchableOpacity>
        <ScrollBottomSheet
          componentType="FlatList"
          snapPoints={[96, "45%", windowHeight - 264]}
          initialSnapIndex={2}
          renderHandle={() => (
            <View style={styles.header}>
              <View style={styles.panelHandle} />
            </View>
          )}
          data={tests}
          renderItem={({ item }) => (
            <ListItem
              title={item.customer}
              subtitle={item.comment}
              image={{ uri: item.url }}
              onPress={() => navigation.navigate("TestDetail")}
            />
          )}
          contentContainerStyle={styles.contentContainerStyle}
        />
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
  contentContainerStyle: {
    backgroundColor: colors.light,
    paddingVertical: 15,
  },
  header: {
    alignItems: "center",
    backgroundColor: colors.light,
    paddingVertical: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHandle: {
    width: 40,
    height: 2,
    backgroundColor: colors.accent,
    borderRadius: 4,
  },
  item: {
    padding: 20,
    justifyContent: "center",
    backgroundColor: colors.light,
    alignItems: "center",
    marginVertical: 10,
  },
});

export default HomeScreen;
