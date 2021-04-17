import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
//Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as firebase from "firebase";

//Local imports
import LoginScreen from "./app/screens/LoginScreen";
import HomeScreen from "./app/screens/HomeScreen";
import CategoryScreen from "./app/screens/CategoryScreen";
import ResultScreen from "./app/screens/ResultScreen";
import HistoryScreen from "./app/screens/HistoryScreen";
import TestDetailsScreen from "./app/screens/TestDetailsScreen";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAswMHTTIc-W5KFlEp-GEP_Xk7aSmmhQDM",
  authDomain: "acouwood.firebaseapp.com",
  databaseURL: "https://acouwood-default-rtdb.firebaseio.com",
  projectId: "acouwood",
  storageBucket: "acouwood.appspot.com",
  messagingSenderId: "423453657668",
  appId: "1:423453657668:web:725c091ea320d4d200ca11",
};

firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
    <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
    <Stack.Screen name="Category" component={CategoryScreen}></Stack.Screen>
    <Stack.Screen name="Result" component={ResultScreen}></Stack.Screen>
    <Stack.Screen name="History" component={HistoryScreen}></Stack.Screen>
    <Stack.Screen
      name="TestDetail"
      component={TestDetailsScreen}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
