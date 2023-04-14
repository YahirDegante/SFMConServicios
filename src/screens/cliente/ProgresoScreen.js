import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions  } from 'react-native';
import GraficProgress from '../../components/count/GraficProgress';
import ProgressOptions from '../../components/count/ProgressOptions';
import AppBarCliente from '../../components/common/AppBarCliente'

export default function ProgrsoScreen() {
    return (
        <View style={styles.container}>
            <AppBarCliente />
            <ProgressOptions />
            <GraficProgress />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    }
});
