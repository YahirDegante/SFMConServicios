import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Input } from "react-native-elements";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Toast } from "react-native-toast-message";

export default function ChangeObjetive(props) {
    const { close, onReload } = props;
    const formik = useFormik({
        initialValues: {
            displayObjetivo: "",
        },
        validationSchema: Yup.object({
            displayObjetivo: Yup.string().required("El objetivo es requerido")
            .matches(/^[a-zA-Z]+$/, "Solo se permiten letras en este campo"),
        }),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            // console.log(formValue);
            // close();
            try {
                const currentUser = getAuth().currentUser;
                await updateProfile(currentUser, { displayObjetivo: formValue.displayObjetivo });
                onReload();
                close();
            } catch (error) {
                Toast.show({
                    type: "error",
                    position: "bottom",
                    text1: "Error al cambiar objetivo"
                })
            }
        },
    });
    return (
        <View style={styles.viewForm}>
            <Input
                containerStyle={styles.input}
                onChangeText={(text) => formik.setFieldValue("displayObjetivo", text)}
                errorMessage={formik.errors.displayObjetivo}
            />
            <Button
                title="Actualizar Objetivo"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btnStyle}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        alignItems: "center",
        paddingVertical: 10,
    },
    input: {
        marginBottom: 10,
    },
    btnContainer: {
        marginTop: 15,
        width: "95%",
    },
    btnStyle: {
        backgroundColor: "#0d5bd7",
    },
});