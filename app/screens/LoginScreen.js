import React from "react";
import { StyleSheet, View, Text, TouchableNativeFeedback } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "../components/AppTextInput";
import CategoryButton from "../components/CategoryButton";
import colors from "../config/colors";
import ErrorMessage from "../components/ErrorMessage";
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
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect="false"
              icon="email"
              keyboardType="email-address"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
              placeholder="Email"
              textContentType="emailAddress"
            ></AppTextInput>
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect="false"
              icon="lock"
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            ></AppTextInput>
            <ErrorMessage error={errors.password} visible={touched.password} />
            <CategoryButton
              title="Login"
              onPress={handleSubmit}
            ></CategoryButton>
          </>
        )}
      </Formik>
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
  logoContainer: {
    alignSelf: "center",
  },
});

export default LoginScreen;
