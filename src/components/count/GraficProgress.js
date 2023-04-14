import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LineChart } from 'react-native-chart-kit';

export default function GraficProgress(valorInicial) {

    //Grafica
    const data = [
        { weight: 70, date: '2023-04-01' },
        { weight: 69, date: '2023-04-02' },
        { weight: 68.5, date: '2023-04-03' },
        { weight: 68, date: '2023-04-03' },
    ];
    const labels = data.map((item) => item.date);
    const weights = data.map((item) => item.weight);
    const chartConfig = {
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // Ancho de la línea de la gráfica
    };
    return (
        <View style={styles.container}>
            <LineChart
                data={{
                    labels,
                    datasets: [
                        {
                            data: weights,
                        },
                    ],
                }}
                width={Dimensions.get('window').width - 20} // Ancho de la gráfica
                height={220} // Altura de la gráfica
                chartConfig={chartConfig}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    textoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    texto: {
        fontSize: 10,
        marginRight: 10,
    },
});
