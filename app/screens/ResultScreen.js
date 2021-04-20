import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Keyboard } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppText from "../components/AppText";
import RoundButton from "../components/RoundButton";
import { firebase } from "../../src/firebase/config";
import Heading from "../components/Heading";
import Screen from "../components/Screen";
import colors from "../config/colors";
import useLocation from "../hooks/useLocation";
import { newTest } from "../api/firebaseMethods";

const validationSchema = Yup.object().shape({
  location: Yup.string().required().label("Location"),
  name: Yup.string().required().label("Name"),
  customer: Yup.string().required().label("Customer"),
  comment: Yup.string().required().label("Comment"),
});

function ResultScreen({ navigation, route }) {
  const [imageUri, setImageUri] = useState();
  const location = useLocation();
  const [testData, setTestData] = useState("");
  const [tests, setTests] = useState([]);
  const testRef = firebase.firestore().collection("tests");
  const userID = firebase.auth().currentUser.uid;

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

  return (
    <Screen>
      <View style={styles.container}>
        <Heading>Resultat</Heading>
        <AppText>{route.params.title}</AppText>
        <AppForm
          initialValues={{
            comment: "",
            customer: "",
            imageUri: "",
            name: "",
            location: "",
          }}
          onSubmit={(values) =>
            newTest(values.comment, values.customer, imageUri, values.location)
          }
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={true}
            icon="pin"
            name="location"
            placeholder={JSON.stringify(location)}
            textContentType="location"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={true}
            icon="account-cowboy-hat"
            name="name"
            placeholder="NamePlaceholder"
            textContentType="name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={true}
            icon="briefcase"
            name="customer"
            placeholder="CustomerPlaceholder"
            textContentType="organizationName"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={true}
            icon="comment"
            name="comment"
            placeholder="CommentPlaceholder"
            textContentType="none"
          />
          {!imageUri && (
            <MaterialCommunityIcons
              name="camera"
              size={100}
              color={colors.dark}
            />
          )}
          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.thumbnail} />
          )}
          <RoundButton
            title="Upload billede"
            onPress={takePicture}
            color="light"
          />
          <SubmitButton title="Gem test" />
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
    borderRadius: 10,
    height: 200,
    width: 300,
    borderColor: colors.dark,
  },
});

export default ResultScreen;
