import React from "react";
import { useState, useEffect } from "react";
import { View, StyleSheet, Image, ActivityIndicator } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import Screen from "../components/Screen";
import { firebase } from "../../src/firebase/config";
import Heading from "../components/Heading";

function TestDetailsScreen({ navigation, route }) {
  const [loading, setLoading] = useState(true);
  let testID = route.params;
  const [test, setTest] = useState([]);
  const [testImageUri, setTestImageUri] = useState("");
  const [testDate, setTestDate] = useState("");

  useEffect(() => {
    async function getTest() {
      let doc = await firebase
        .firestore()
        .collection("tests")
        .doc(testID.key)
        .get();

      if (!doc.exists) {
        console.log("No test data with id: " + testID);
      } else {
        let dataObj = doc.data();
        setTest(dataObj);
        console.log("Test succesfully found");
        setTestImageUri(test.url);
        const dateObject = await test.createdAt.toDate();
        setTestDate(dateObject);
        console.log(testDate);
      }
      return test;
    }
    getTest();
    setLoading(false);
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <Screen>
      <View style={styles.detailsContainer}>
        <Heading>{test.testerID}</Heading>
        <Image style={styles.image} source={{ uri: testImageUri }} />
        <AppText style={styles.title}>{test.comment}</AppText>
        <AppText style={styles.date}>{test.comment}</AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  date: {
    color: colors.dark,
    fontSize: 20,
    marginVertical: 10,
  },
  detailsContainer: {
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: 300,
    borderColor: colors.secondary,
    borderWidth: 2,
  },
  title: {
    fontSize: 24,
  },
});
export default TestDetailsScreen;
