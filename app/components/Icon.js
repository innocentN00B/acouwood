import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons/MaterialCommunityIcons';

function Icon({name, backgroundColor = "#000", iconColor = "#fff"}) {
    return (
        <View style={styles.icon}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5}/>

        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: 40,
        height: 40,
        backgroundColor
    }
})

export default Icon;