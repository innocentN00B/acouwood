import React from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <View
        style={{ backgroundColor: "dodgerblue", width: 100, height: 300 }}
      />
      <View style={{ backgroundColor: "gold", width: 100, height: 200 }} />
      <View
        style={{
          backgroundColor: "red",
          width: 100,
          height: 100
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
