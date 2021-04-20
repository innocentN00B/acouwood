import { useNavigation } from "@react-navigation/core";
import * as firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";

export async function registration(email, password, fullName) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users").doc(currentUser.uid).set({
      email: currentUser.email,
      fullName: fullName,
    });
  } catch (err) {
    Alert.alert("Something went wrong: ", err.message);
  }
}

export async function signIn(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert("Something went wrong: ", err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert("Something went wrong: ", err.message);
  }
}

export async function newTest(comment, customer, image, location) {
  try {
    const db = firebase.firestore();
    const currentUser = firebase.auth().currentUser;

    db.collection("tests").add({
      comment: comment,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      customer: customer,
      image: image,
      location: location,
      testerID: currentUser.uid,
    });
    console.log(
      "New test created with values: comment: " +
        comment +
        " customer: " +
        customer +
        " imageUri: {" +
        image +
        "} " +
        "location: " +
        location
    );
  } catch (err) {
    Alert.alert("Something went wrong: ", err.message);
  }
}
