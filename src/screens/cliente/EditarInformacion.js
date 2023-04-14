import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Toast } from 'react-native-toast-message';


export default function InformarionScreen() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const { data } = route.params;

  const cancelar = () => {
    navigation.goBack();
  }
  const actualizarPantalla = () => {
    route.params.onUpdate();
  }
  console.log(data);
  React.useEffect(() => {
    s
    if (data) {
      setNombre(data.name);
      setApellidos(data.lastName);
      setCorreo(data.email);
      setPeso(data.weight);
      setAltura(data.height);
      setFechaNacimiento(data.birthdate);
    }
  }, [data]);

  const actualizar = async () => {
    try {
      const response = await fetch(`//192.168.100.10:8090/auth/updateAlumno/${data.id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: nombre,
          lastName: apellidos,
          email: correo,
          weight: peso,
          height: altura,
          birthdate: fechaNacimiento,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        Toast.show({
          type: 'success',
          text1: 'Información actualizada',
        });
        actualizarPantalla();
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error al actualizar la información',
          text2: data.message || '',
        });
      }
    } catch (error) {
      console.error(error);
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text>Mi información:</Text>
      <Text>Nombre:</Text>
      <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />
      <Text>Apellidos:</Text>
      <TextInput style={styles.input} value={apellidos} onChangeText={setApellidos} />
      <Text>Correo:</Text>
      <TextInput style={styles.input} value={correo} onChangeText={setCorreo} />
      <Text>Peso:</Text>
      <TextInput style={[styles.input, styles.inputLeft]} value={peso} onChangeText={setPeso} />
      <Text style={styles.inputRight}>kg</Text>
      <Text>Altura:</Text>
      <TextInput style={[styles.input, styles.inputLeft]} value={altura} onChangeText={setAltura} />
      <Text style={styles.inputRight}>cm</Text>
      <Text>Fecha de nacimiento:</Text>
      <TextInput style={styles.input} value={fechaNacimiento} onChangeText={setFechaNacimiento} />
      <TouchableOpacity style={styles.botonIzquierdo} onPress={cancelar}>
        <Text style={{ color: '#fff', fontSize: 14 }}>Cancelar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botonDerecho} onPress={actualizar}>
        <Text style={{ color: '#fff', fontSize: 14 }}>Actualizar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 267,
    height: 32,
    borderWidth: 1,
    borderRadius: 32,
    paddingHorizontal: 10,
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
  },
})