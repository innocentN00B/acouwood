import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { firebase } from "../../src/firebase/config";
import Heading from "../components/Heading";
import LogoSvg from "../../svgs/LogoSvg";
import Screen from "../components/Screen";
import RoundButton from "../components/RoundButton";
import { signIn, loggingOut } from "../api/firebaseMethods";

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
          onSubmit={(values) => signIn(values.email, values.password)}
          validationSchema={validationSchema}
        >
          <AppFormField
            icon="email"
            autoCorrect={false}
            keyboardType="email-address"
            name="email"
            placeholder="Email"
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
        <RoundButton
          title="Register"
          onPress={() => navigation.navigate("Register")}
          borderColor="#E3A541"
          backgroundColor="#EBDDC2"
        />
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
