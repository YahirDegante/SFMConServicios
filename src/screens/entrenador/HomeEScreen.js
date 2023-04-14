import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppBar from '../../components/common/AppBar'

export default function HomeEScreen() {
    const onPress = () => {
        console.log("presionaste el boton")
    }
    return (
        <>
            <SafeAreaProvider>
                <View>
                    <AppBar />
                    <Text>Pantalla Index Entrenador</Text>
                    <TouchableOpacity style={styles.button1} onPress={onPress}>
                        <Image source={require('../../../assets/imagenes/clientes.png')} style={styles.image} />
                        <Text style={{ color: '#fff', fontSize: 35}}>CLIENTES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={onPress}>
                        <Image source={require('../../../assets/imagenes/rutina.png')} style={styles.image} />
                        <Text style={{ color: '#fff', fontSize: 35}}>RUTINAS</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaProvider>
        </>
    )
}

const styles = StyleSheet.create({
    button1:{
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 335,
        height: 124,
        left: 12,
        top: 175,
        borderRadius: 16,
    },
    button2: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 335,
        height: 124,
        left: 12,
        top: 330,
        borderRadius: 16,
        backgroundColor: "#1E1E1E"
    },
    image: {
        position: 'absolute',
        width: 335,
        height: 122.76,
        borderRadius: 16
    },
})