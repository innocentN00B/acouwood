import React from "react";
import Image from "react-native";

export default function NewScreen() {
    return (
      <View styles={styles.topbar}>
          <View styles={styles.box}/>
      </View>  
    );
}

const styles = StyleSheet.create({
    topbar: {
        flexDirection: "row"
    },
    box: {
        height: "5%",
        width: "5%",
        backgroundcolor: "red"
    }
});