import React from 'react';
import {StyleSheet, View} from 'react-native';

import colors from '../config/colors';

function ListItemSeperator(props) {
    return (
        <View style={styles.seperator}/>
    );
}

const styles = StyleSheet.create({
    seperator: {
        width: '100%',
        height: '10%',
        backgroundColor: colors.accent
      }
})

export default ListItemSeperator;