import * as firebase from "firebase";
import "firebase/firestore";

export async function getUser() {
  try {
    const currentUser = firebase.auth().currentUser;
    const db = firebase.firestore();
    const user = db
      .collection("users")
      .doc(currentUser.uid)
      .get()
      .then((documentSnapshot) => {
        console.log("User exists: ", documentSnapshot.exists);
        if (documentSnapshot.exists) {
          console.log("User data: ", documentSnapshot.data());
        }
      });
    return user;
  } catch (error) {
    console.log(error);
  }
}

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
  } catch (error) {
    console.log(error);
  }
}

export async function getUserInfo() {}

export async function newTest(comment, customer, image, location, testID) {
  try {
    const db = firebase.firestore();
    const currentUser = firebase.auth().currentUser;

    const res = await db.collection("tests").add({
      comment: comment,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      customer: customer,
      image: image,
      location: location,
      testerID: currentUser.uid,
      testID: testID,
    });
    await uploadImage(image, testID);
    await downloadImage(testID, res.id);
    console.log("New test generated");
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
