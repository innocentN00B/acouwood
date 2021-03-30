import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import colors from "../config/colors";
import Heading from "../components/Heading";
import LogoSvg from "../../svgs/LogoSvg";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

function LoginScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <LogoSvg></LogoSvg>
      </View>
      <Heading>Login</Heading>
      <View style={styles.formContainer}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "flex-start",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  formContainer: {
    alignItems: "center",
  },
  logoContainer: {
    alignSelf: "center",
  },
});

export default LoginScreen;
