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
import { FlatList } from "react-native-gesture-handler";

const validationSchema = Yup.object().shape({
  woodId: Yup.string().label("WoodID").required("Required field"),
  location: Yup.string().label("Location").required("Required field"),
  comment: Yup.string().label("Comment").required("Required field"),
});

function ResultScreen({ navigation }) {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [imageUri, setImageUri] = useState();
  const [moistDetected, setMoistDetected] = useState(false);

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
    generateResult();
    newTest(
      values.comment,
      values.woodId,
      imageUri,
      values.location,
      testID,
      moistDetected,
      currentUserUID
    );
    navigation.navigate("Home");
  };

  const generateResult = () => {
    const randomBoolean = Boolean(Math.round(Math.random() < 0.5));
    setMoistDetected(randomBoolean);
    console.log(moistDetected);
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
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="shield-key-outline"
            name="woodId"
            placeholder={"Wood Sample ID"}
            textContentType="oneTimeCode"
          />
          <AppFormField
            autoCorrect={true}
            icon="pin"
            name="location"
            placeholder={"Location"}
            textContentType="location"
          />
          <AppFormField
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
