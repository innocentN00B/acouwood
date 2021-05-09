import React, { useRef, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import NoTextLogoSvg from "../../svgs/NoTextLogoSvg";

import colors from "../config/colors";

function StartButton({ onPress }) {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      })
    ).start();
  });

  return (
    <View>
      <Animated.View
        style={[
          {
            transform: [
              {
                scale: animatedValue.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [0.9, 1.1, 0.9],
                }),
              },
            ],
          },
        ]}
      >
        <TouchableOpacity style={styles.startButton} onPress={onPress}>
          <NoTextLogoSvg />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  startButton: {
    backgroundColor: colors.light,
    borderRadius: 100,
    width: 200,
    height: 200,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartButton;
