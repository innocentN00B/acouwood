import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

import colors from '../config/colors'

function WelcomeScreen() {
    return (
       <View style= {styles.background} >
           <View style={styles.logoContainer}>
                <Image source={require('../assets/woodsense_logo.jpg')}/>
                <Text>Mål fugt og skader på træ </Text>
           </View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
       </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.primary, 
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton: {
        width: '100%',
        height: "10%",
        backgroundColor: "#532D0F"
    },
    logoContainer: {
        position: "absolute",
        top: 200,
    },
    registerButton: {
        width: '100%',
        height: "10%",
        backgroundColor: "#B87348"
    }
})

export default WelcomeScreen;