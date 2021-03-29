import React from "react";
import AppLoading from "expo-app-loading";
import LoginScreen from "./app/screens/LoginScreen";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <LoginScreen></LoginScreen>;
}
