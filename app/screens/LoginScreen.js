import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Heading from "../components/Heading";
import LogoSvg from "../../svgs/LogoSvg";
import Screen from "../components/Screen";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import { TextInput } from "react-native-gesture-handler";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

function LoginScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.logoContainer}>
        <LogoSvg />
      </View>
      <Heading>Login</Heading>
      <View style={styles.formContainer}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => navigation.navigate("Home", { id: 1 })}
          validationSchema={validationSchema}
        >
          <AppFormField
            icon="email"
            keyboardType="phone-pad"
            name="email"
            placeholder="+45 12 34 56 78"
            textContentType="emailAddress"
          ></AppFormField>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          ></AppFormField>
          <SubmitButton title="Login" />
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    alignItems: "center",
  },
  logoContainer: {
    alignSelf: "center",
  },
});

export default LoginScreen;
