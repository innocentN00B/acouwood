import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
} from "react-native";

import colors from "../config/colors";

function ListItem({ title, subtitle, image, onPress }) {
  return (
    <TouchableHighlight underlayColor={"transparent"} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    justifyContent: "center",
    backgroundColor: colors.primary,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  image: {
    width: 150,
    height: 120,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  textContainer: {
    paddingTop: 10,
    alignItems: "flex-start",
  },
  title: {
    color: colors.dark,
    fontSize: 14,
    fontFamily: "Montserrat_700Bold",
    padding: 5,
  },
  subtitle: {
    padding: 5,
    color: colors.dark,
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
  },
});

export default ListItem;
