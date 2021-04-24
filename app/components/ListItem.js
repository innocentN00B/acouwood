import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";
import ListItemSeperator from "./ListItemSeperator";

function ListItem({ title, subtitle, image, onPress }) {
  return (
    <TouchableHighlight underlayColor={"transparent"} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText>{subtitle}</AppText>
        </View>
        <ListItemSeperator />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.primary,
    marginBottom: 0,
  },
  detailsContainer: {
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderColor: colors.accent,
    borderWidth: 1,
  },
  title: {
    marginBottom: 7,
  },
});

export default ListItem;
