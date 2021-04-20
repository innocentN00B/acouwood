import React from "react";
import { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import { firebase } from "../../src/firebase/config";
import Heading from "../components/Heading";
import colors from "../config/colors";
import NoTextLogoSvg from "../../svgs/NoTextLogoSvg";
import RoundButton from "../components/RoundButton";
import { loggingOut } from "../api/firebaseMethods";

function HomeScreen({ navigation }) {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [fullName, setName] = useState("");

  const handlePress = () => {
    loggingOut();
    navigation.replace("Home");
  };

  useEffect(() => {
    async function getUserInfo() {
      let doc = await firebase
        .firestore()
        .collection("users")
        .doc(currentUserUID)
        .get();

      if (!doc.exists) {
        Alert.alert("No user data found!");
      } else {
        let dataObj = doc.data();
        setName(dataObj.fullName);
      }
    }
    getUserInfo();
  });

  return (
    <Screen>
      <Heading>Velkommen {fullName}</Heading>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate("Category")}
        >
          <NoTextLogoSvg />
        </TouchableOpacity>
        <Heading>Start test</Heading>
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
});

export default HomeScreen;
