import React from "react";
import { useFormikContext } from "formik";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../../config/colors";

function SubmitButton({ title, color = "secondary" }) {
  const { handleSubmit } = useFormikContext();

  return (
    <TouchableOpacity
      onPress={handleSubmit}
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <Text style={styles.text}>{title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 50,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    color: colors.dark,
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
  },
});

export default SubmitButton;
