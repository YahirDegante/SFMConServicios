import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as yup from 'yup';
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { Input, Button, Icon } from "react-native-elements";
import { TouchableOpacity } from 'react-native';

export default function CambiarContraScreen() {
    const [newPassword, setNewPassword] = useState(false);
    const [repeatNewPassword, setRepeatNewPassword] = useState(false);
    const formik = useFormik({
        initialValues: {
            newPassword: "",
            repeatNewPassword: "",
        },
        validationSchema: yup.object({

            newPassword: yup.string().required("Contraseña obligatoria"),
            repeatNewPassword: yup.string().required("Contraseña obligatoria")
                .oneOf([yup.ref('newPassword')], 'Las contraseñas no coinciden')
        }),
        validateOnChange: false,
    });
    const showPass = () => {
        setNewPassword(!newPassword);
    };
    const showRepeatPass = () => {
        setRepeatNewPassword(!repeatNewPassword);
    };

    const navigation = useNavigation();

    const cancelar = () => {
        navigation.navigate('informacionScreen');
    }

    const cambiar = () => {
        //Aqui se deben mandar los datos al servicio
        console.log("Contraseña cambiada");
        navigation.navigate('informacionScreen');
    }
    return (
        <View style={styles.container}>
            <Input
                placeholder="Contraseña"
                secureTextEntry={newPassword ? false : true}
                containerStyle={styles.inputs}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={newPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.icon}
                        onPress={showPass}
                    />
                }
                onChangeText={(text) => formik.setFieldValue("password", text)}
                errorMessage={formik.errors.password}
            />
            <Input
                placeholder="Repetir contraseña"
                secureTextEntry={repeatNewPassword ? false : true}
                containerStyle={styles.inputs}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={repeatNewPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.icon}
                        onPress={showRepeatPass}
                    />
                }
                onChangeText={(text) => formik.setFieldValue("repeatNewPassword", text)}
                errorMessage={formik.errors.repeatNewPassword}
            />
            <TouchableOpacity style={styles.botonIzquierdo} onPress={cancelar}>
                <Text style={{ color: '#fff', fontSize: 14 }}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botonDerecho} onPress={formik.cambiar}>
                <Text style={{ color: '#fff', fontSize: 14 }}>Cambiar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputs: {
        width: '70%',
        height: 50,
        marginTop: 10,
        //poner bordes
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        backgroundColor: '#EEEEEE',
    },
    text: {
        fontSize: 18,
        color: 'black',
        marginBottom: 10,
    },
    botonIzquierdo: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderRadius: 15,
        backgroundColor: 'blue',
        position: 'absolute',
        width: 159.57,
        height: 47.75,
        left: 11,
        top: 569,
    },
    botonDerecho: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: 159.57,
        height: 47.75,
        left: 188,
        top: 568,
        borderRadius: 15,
        backgroundColor: 'red',
    }
})