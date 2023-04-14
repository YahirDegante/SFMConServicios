import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "../screens/IndexScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import PasswordScreen from "../screens/PasswordScreen";
import HomeCScreen from "../screens/cliente/HomeCScreen";
import HomeEScreen from "../screens/entrenador/HomeEScreen";
import InformarionScreen from "../screens/cliente/InformacionScreen";
import EditarInformacion from "../screens/cliente/EditarInformacion";
import CambiarContraScreen from "../screens/cliente/CambiarContraScreen";
import ProgresoScreen from "../screens/cliente/ProgresoScreen";

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="index" component={IndexScreen} options={{title:"Iniciar sesión"}} />
            <Stack.Screen name="register" component={RegistrationScreen} options={{title:"Registro"}} />
            <Stack.Screen name="password" component={PasswordScreen} options={{title:"Recuperar contraseña"}} />
            <Stack.Screen name="homeCoach" component={HomeEScreen} options={{title:"InicioEntrenador"}} />
            {/* Pantallas cliente */}
            <Stack.Screen name="homeClient" component={HomeCScreen} options={{title:"Inicio"}} />
            <Stack.Screen name="informacionScreen" component={InformarionScreen} options={{title:"MiInformacion"}} />
            <Stack.Screen name="editInfoScreen" component={EditarInformacion} options={{title:"Edit"}} />
            <Stack.Screen name="cambiarContra" component={CambiarContraScreen} options={{title:"Cambiar Contra"}} />
            <Stack.Screen name="progresoScreen" component={ProgresoScreen} options={{title:"Progrso"}} />

        </Stack.Navigator>
    );
}