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

//Local imports
import LoginScreen from "./app/screens/LoginScreen";
import HomeScreen from "./app/screens/HomeScreen";
import CategoryScreen from "./app/screens/CategoryScreen";
import ResultScreen from "./app/screens/ResultScreen";

//Stack Navigator
const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Result"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
    <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
    <Stack.Screen name="Category" component={CategoryScreen}></Stack.Screen>
    <Stack.Screen name="Result" component={ResultScreen}></Stack.Screen>
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
