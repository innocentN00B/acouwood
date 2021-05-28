import { NavigationContainer } from "@react-navigation/native";
import * as firebase from "firebase";
import "firebase/firestore";

export async function registration(email, password, fullName) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users").doc(currentUser.uid).set({
      email: currentUser.email,
      fullName: fullName,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function signIn(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.log(error);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
    console.log("User signed out.");
  } catch (error) {
    console.log(error);
  }
}

export async function newTest(
  comment,
  woodId,
  image,
  location,
  testID,
  moistDetected,
  userID
) {
  try {
    const db = firebase.firestore();
    const currentUser = firebase.auth().currentUser;

    const res = await db.collection("tests").add({
      comment: comment,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      woodId: woodId,
      image: image,
      location: location,
      testerID: userID,
      testID: testID,
      moistDetected: moistDetected,
    });
    await uploadImage(image, testID);
    await downloadImage(testID, res.id);
    console.log("New test succesfully generated");
  } catch (error) {
    console.log(error);
  }
}

export async function uploadImage(imageUri, testID) {
  const response = await fetch(imageUri);
  const blob = await response.blob();
  var ref = firebase.storage().ref().child(testID);
  console.log("Image to testID: " + testID + " succesfully uploaded.");
  return ref.put(blob);
}

export async function downloadImage(testID, doc) {
  var ref = firebase.storage().ref(testID);
  const url = await ref.getDownloadURL();
  firebase.firestore().collection("tests").doc(doc).update({ url: url });
  console.log("Image to testID: " + testID + " succesfully downloaded." + url);
  return url;
}
