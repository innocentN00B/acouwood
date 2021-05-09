import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Keyboard } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import "react-native-get-random-values";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import TextSquare from "../components/TextSquare";
import RoundButton from "../components/RoundButton";
import Heading from "../components/Heading";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { newTest } from "../api/firebaseMethods";
import * as firebase from "firebase";
import "firebase/firestore";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  location: Yup.string().label("Location").required("Required field"),
  name: Yup.string().label("Name").required("Required field"),
  customer: Yup.string().label("Customer").required("Required field"),
  comment: Yup.string().label("Comment").required("Required field"),
});

function ResultScreen({ navigation }) {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [imageUri, setImageUri] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [fullName, setName] = useState("");
  const location = useLocation([]);

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

  //Getting users permission to the camera and photo library
  const requestCameraPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to the camera");
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const takePicture = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("Error taking picture");
    }
  };

  const handleSubmit = async (values) => {
    const testID = uuidv4();
    newTest(values.comment, values.customer, imageUri, values.location, testID);
    navigation.navigate("Home");
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Heading>Result</Heading>
        <TextSquare title="Moist detected" />
        <AppForm
          initialValues={{
            comment: "",
            customer: "",
            imageUri: "",
            name: "",
            location: "",
          }}
          onSubmit={() => (handleSubmit, console.log("Test submitted"))}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCorrect={true}
            icon="pin"
            name="location"
            placeholder={"Address"}
            textContentType="location"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={true}
            icon="account-cowboy-hat"
            name="name"
            placeholder={"Name"}
            textContentType="name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={true}
            icon="briefcase"
            name="customer"
            placeholder="Customer"
            textContentType="organizationName"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={true}
            icon="comment"
            name="comment"
            placeholder="Comment"
            textContentType="none"
          />
          {!imageUri && (
            <RoundButton
              title="Upload picture"
              onPress={takePicture}
              backgroundColor={colors.primary}
              borderColor={colors.secondary}
              color={colors.dark}
            />
          )}
          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.thumbnail} />
          )}

          <SubmitButton title="Save test" />
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  thumbnail: {
    height: 200,
    width: "80%",
  },
  modalContainer: {
    height: "20%",
    width: "80%",
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    borderWidth: 2,
  },
});

export default ResultScreen;
