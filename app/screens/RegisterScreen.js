import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import colors from "../config/colors";
import Heading from "../components/Heading";
import Screen from "../components/Screen";
import { registration } from "../api/firebaseMethods";

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .label("Name"),
  email: Yup.string().email("Invalid email").label("Email"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(24, "Password can be maximum 24 characters")
    .label("Password"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

function RegisterScreen({ navigation, route }) {
  return (
    <Screen>
      <View style={styles.container}>
        <Heading>Create a user</Heading>
        <AppForm
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            passwordConfirmation: "",
          }}
          onSubmit={(values) =>
            registration(values.email, values.password, values.fullName)
          }
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCorrect={false}
            icon="human-greeting"
            keyboardType="default"
            name="fullName"
            placeholder="Name"
            textContentType="name"
          />
          <AppFormField
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="passwordConfirmation"
            placeholder="Confirm Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Login" />
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

export default RegisterScreen;
