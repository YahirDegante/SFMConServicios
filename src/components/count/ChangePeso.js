import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Input } from "react-native-elements";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Toast } from "react-native-toast-message";

export default function ChangePeso(props) {
    const { close, onReload } = props;
    const formik = useFormik({
        initialValues: {
            displayPeso: "",
        },
        validationSchema: Yup.object({
            displayPeso: Yup.string().required("El peso es requerido")
            .matches(/^[0-9]+$/, "El peso debe ser un número entero positivo"),
        }),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            // console.log(formValue);
            // close();
            try {
                const currentUser = getAuth().currentUser;
                await updateProfile(currentUser, { displayPeso: formValue.displayPeso });
                onReload();
                close();
            } catch (error) {
                Toast.show({
                    type: "error",
                    position: "bottom",
                    text1: "Error al ccambiar peso"
                })
            }
        },
    });
    return (
        <View style={styles.viewForm}>
            <Input
                containerStyle={styles.input}
                onChangeText={(text) => formik.setFieldValue("displayPeso", text)}
                errorMessage={formik.errors.displayPeso}
            />
            <Button
                title="Actualizar Peso"
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